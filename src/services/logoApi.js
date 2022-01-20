import { apiUrl } from "../constants"
import axios from 'axios';

// export const getClcards = async () => {
//   const sqlQuery = "SELECT TOP 30  LOGICALREF as id, CODE,DEFINITION_  FROM [LOGODB].[dbo].LG_001_CLCARD WHERE ACTIVE=0 and LOGICALREF !=1";
//   const response = await fetch(`${apiUrl}${sqlQuery}`)
//   const results = await response.json();
//   return results;
// }


export const getClcards = async () => {
  const sqlQuery = "SELECT TOP 3000  LOGICALREF as id, CODE,DEFINITION_  FROM [LOGODB].[dbo].LG_001_CLCARD WHERE ACTIVE=0 and LOGICALREF !=1";
  return axios.get(`${apiUrl}${sqlQuery}`);
}