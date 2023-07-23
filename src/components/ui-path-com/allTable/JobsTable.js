import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchGetData } from '../../../utillies/ui-path-utill';
import TableBody from './TableBody';
import TablePagination from './TablePagination';

const JobsTable = () => {
  const folder = useParams();
  console.log(folder);
  const [ref,setRef]=useState(null)
  const { data, isLoading, isError, refetch } = useQuery(['GET_ALL_JOBS', folder.id], () =>
    fetchGetData( `${process.env.React_App_LOCAL_HOST}${process.env.React_App_GET_ALL_JOBS}`, folder.id)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = data ? data.slice(indexOfFirstJob, indexOfLastJob) : [];

  if(ref){
    refetch()
  }

  let display;
  if (isLoading) {
    display = <div>Loading...</div>;
  }

  if (isError) {
    display = <div>Error occurred while fetching jobs.</div>;
  }
  if (data) {
    display = currentJobs.map((job) => <TableBody key={job.key} setRef={setRef}   job={job}></TableBody>);
  }
  const totalPages = Math.ceil(data ? data.length / jobsPerPage : 0);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <table className="min-w-full divide-y divide-gray-900">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-6 text-left text-sm divide-gray-900 text-white">Process</th>
            <th className="py-3 px-6 text-left text-sm divide-gray-900 text-white">Trigger Details</th>
            <th className="py-3 px-6 text-left text-sm divide-gray-900 text-white">Next Run Time</th>
            <th className="py-3 px-6 text-left text-sm divide-gray-900 text-white">State</th>
            <th className="py-3 px-6 text-left text-sm divide-gray-900 text-white">Details</th>
            <th className="py-3 px-6 text-left text-sm divide-gray-900 text-white">Action</th>
          </tr>
        </thead>
        <tbody>{display}</tbody>
      </table>
      <TablePagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    </>
  );
};

export default JobsTable;

