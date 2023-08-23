import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchGetData } from '../../../utillies/ui-path-utill';
import TableBody from './TableBody';
import TablePagination from './TablePagination';

const JobsTable = () => {
  const folder = useParams();
  console.log(folder);
  const [ref, setRef] = useState(null);
  const { data, isLoading, isError, refetch } = useQuery(['GET_ALL_JOBS', folder.id], () =>
    fetchGetData(`${process.env.React_App_LOCAL_HOST}${process.env.React_App_GET_ALL_JOBS}`, folder.id)
  );

  const sortedData = Array.isArray(data)
    ? [...data].sort((a, b) => data.indexOf(b) - data.indexOf(a))
    : [];

  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = sortedData.slice(indexOfFirstJob, indexOfLastJob);

  console.log(data);
  if (ref) {
    refetch();
  }

  let display;
  if (isLoading) {
    display = <div>Loading...</div>;
  }

  if (isError) {
    display = <div>Error occurred while fetching jobs.</div>;
  }
  if (sortedData.length > 0) {
    display = currentJobs.map((job,i) => <TableBody i={i} key={job.key} setRef={setRef} job={job}></TableBody>);
  }

  const totalPages = Math.ceil(sortedData.length / jobsPerPage);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y bg-orange-500 divide-gray-300 text-white">
      <thead>
          <tr className="border-b">
            <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">Process</th>
            <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">Start Time</th>
            <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">Trigger Details</th>
            <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">Next Run Time</th>
            <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">State</th>
            <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">State</th>
            <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">Details</th>
            <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">Action</th>
           
          </tr>
        </thead>
        <tbody className="bg-white divide-y text-black divide-gray-300">{display}</tbody>
      </table>
      <TablePagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    </div>
  );
};

export default JobsTable;


