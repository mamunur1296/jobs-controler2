import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchGetData, getUniqueObjects } from '../../utillies/ui-path-utill';
import VarticalNavChild from './VarticalNaveChild';

const VarticalNav = () => {
    const { data ,isLoading , isError } = useQuery(['ui-path/all_File'], () => fetchGetData(`${process.env.React_App_LOCAL_HOST}${process.env.React_App_GET_ALL_FILE}`));
    console.log(data);
    let display;
    if (isLoading) {
      display= <div>Loading...</div>;
    }
  
    if (isError) {
      display= <div>Error occurred while fetching data.</div>;
    }
    if (data) {
      const uniqueData = getUniqueObjects(data, "OrganizationUnitFullyQualifiedName");
      console.log(uniqueData);
      display= uniqueData.map(folder=><VarticalNavChild key={folder.Key} folder={folder}></VarticalNavChild>)
    }
    return (
        <div>
            {display}
        </div>
    );
};

export default VarticalNav;
