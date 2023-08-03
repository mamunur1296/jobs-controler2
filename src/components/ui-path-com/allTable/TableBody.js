import { faCircleCheck, faCircleExclamation, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchGetData } from '../../../utillies/ui-path-utill';


const TableBody = ({ job ,setRef  }) => {
  const depandency= false; 
  const folderData=useParams()
  const { data, isLoading, isError, refetch } = useQuery(['PROCESS_SCHEDULES', job.OrganizationUnitId], () =>
    fetchGetData(`${process.env.React_App_LOCAL_HOST}${process.env.React_App_GET_ALL_PROSS_SCHEDULE}`, job.OrganizationUnitId)
  );

  const newTrigger = async () => {
    const bodyData = {
      startInfo: {
        ReleaseKey: folderData.key,
        Strategy: "ModernJobsCount",
        JobsCount: 1,
        InputArguments: "{}"
      }
    };
  
    try {
      const data = await fetchGetData(`${process.env.React_App_LOCAL_HOST}${process.env.React_App_GET_ALL_STAIRT_JOBS}`, folderData.id, bodyData)
      console.log(data);
      setRef(!depandency)
    } catch (error) {
      console.log(error);
    }
  };
  

  let display;

  if (isLoading) {
    display = <div>Loading...</div>;
  }

  if (isError) {
    display = <div>Error occurred while fetching data.</div>;
  }

  if (data) {
    display = data.map((schedule ,i) => (
      <td key={i} className="py-4 px-6 border-b text-sm border-gray-200">
        {schedule.StartProcessCronSummary}
      </td>
    ));
  }

  useEffect(() => {
    refetch();
  }, [job.OrganizationUnitId,refetch]);

  return (
    <tr>
      <td className="py-4 px-6 border-b text-sm border-gray-200">{job.ReleaseName}</td>
      <td className="py-4 px-6 border-b text-sm border-gray-200">{job.CreationTime}</td>
      {display.length > 0 ? display : <td className="py-4 px-6 border-b text-sm border-gray-200">No Data</td>}
      <td className="py-4 px-6 border-b text-sm border-gray-200">No Data</td>
      {
        job.State === "Successful" ? (
          <td className="py-4 px-6 border-b text-sm border-gray-200">
            <FontAwesomeIcon className='text-green-400' icon={faCircleCheck} />
            <span>{job.State}</span>
          </td>
        ) : (
          <td className="py-4 px-6 border-b text-sm border-gray-200">
            <FontAwesomeIcon className='text-red-400' icon={faCircleExclamation} />
            <span>{job.State}</span>
          </td>
        )
      }
      <td className="py-4 px-6 border-b text-sm border-gray-200">no data</td>
      <td className="py-4 px-6 border-b text-sm border-gray-200">
        <div className="flex items-center ml-4">
          <button onClick={newTrigger} className="flex items-center border px-3 py-1 rounded-md bg-sky-700">
            <FontAwesomeIcon icon={faPlay} className="mr-1" />
            <span>Start</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableBody;

