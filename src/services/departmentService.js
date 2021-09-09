import http from "./httpService";

export function createDepartment(department) {
  http.post("http://localhost:8000/api/departments", {
    name: department.name,
  });
}

export const getDepartments = () => {
  return http.get("http://localhost:8000/api/departments");
};
