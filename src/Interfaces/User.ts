interface User {
  id?: string;
  name: string;
  phone: string;
  email: string;
  gender: string;
  isAdmin: boolean;
  admNo: string;
  roomId?: string;
  password?: string;
}

export default User;
