import http from "./httpService";

export function nominateStaff(staff) {
  http.post("http://localhost:8000/api/nominateStaff", {
    name: staff.nameOfStaff,
  });
}
