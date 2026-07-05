export type Role = 'Admin' | 'Employee';
export type Status = 'Active' | 'On_Leave' | 'Terminated';

export interface LeaveBalances {
  sickLeave: number;
  casualLeave: number;
  paidTimeOff: number;
}

export interface Employee {
  _id: string;
  name: string;
  email: string;
  employeeId: string;
  role: Role;
  department: string;
  designation: string;
  joiningDate: Date | string;
  status: Status;
  leaveBalances: LeaveBalances;
  createdAt: string;
  updatedAt: string;
}