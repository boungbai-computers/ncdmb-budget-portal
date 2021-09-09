import http from "./httpService";
import { apiUrl } from "../config.json";

export const borrowRequest = (request) => {
  return console.log(
    http.post(`${apiUrl}/borrow_requests`, {
      amount: request.description,
      date: request.date,
      department_id: "/api/departments/" + request.departmentid,
      description: request.description,
    })
  );
};
