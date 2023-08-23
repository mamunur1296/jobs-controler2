import { faCircleCheck, faCircleExclamation, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchGetData } from '../../../utillies/ui-path-utill';


const TableBody = ({ job ,setRef ,i }) => {
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
      <td key={i} className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">
        {schedule.StartProcessCronSummary}
      </td>
    ));
  }

  useEffect(() => {
    refetch();
  }, [job.OrganizationUnitId,refetch]);

  return (
    <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""} >
      <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">{job.ReleaseName}</td>
      <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">{job.CreationTime}</td>
      {display.length > 0 ? display : <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">No Data</td>}
      <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">No Data</td>
      {
        job.State === "Successful" ? (
          <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">
            <FontAwesomeIcon className='text-green-400' icon={faCircleCheck} />
            <span>{job.State}</span>
          </td>
        ) : (
          <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">
            <FontAwesomeIcon className='text-red-400' icon={faCircleExclamation} />
            <span>{job.State}</span>
          </td>
        )
      }
      <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">no data</td>
      <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">
        <div className="flex items-center ml-4">
          <button onClick={newTrigger} className="text-white bg-gradient-to-r text-[8px] md:text-base  from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 md:px-5 py-.5 md:py-2.5 text-center md:mr-2 md:mb-2">
            <FontAwesomeIcon icon={faPlay} className="mr-1" />
            <span>Start</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableBody;

