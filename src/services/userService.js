import http from "./httpService";

export function signUpUser(user) {
  http.post("http://localhost:8000/api/users", {
    name: user.fullname,
    email: user.email,
    password: user.password,
    department: user.department,
    staffId: user.staffId,
    designation: user.designation,
    date: Date.parse(),
  });
}
