export interface QueryResult<T> {
  rows: T[];
  rowCount: number;
  command: string;
  oid: number;
  fields: any[];
}

export interface CountResult {
  count: string;
}

export interface Attendance {
  id: number;
  employee_id: number;
  employee_name: string;
  department_name: string;
  employee_position?: string;
  department_id?: number; 
  attendance_date: string; // YYYY-MM-DD
  attendance_clock_in_time?: string | null; // HH:MM
  attendance_clock_out_time?: string | null; // HH:MM
  attendance_worked_hour?: number;
  attendance_status: string;
  attendance_overtime_hour?: number;
  attendance_clock_in_location?: string;
  attendance_clock_out_location?: string;
  notes?: string;
  is_active?: boolean;
  scheduled_start_time?: string; // HH:MM
  scheduled_end_time?: string; // HH:MM
  productive_hours?: number;
  overtime_hours?: number;
  break_hours?: number;
  device?: string;
  grossHours: number,
  shift_type: string,
  work_mode: string,
  lateIn: number
}

export interface Department {
  id: number;
  department_name: string;
  department_code?: string;
  department_head_id?: number;
  is_active?: boolean;
}

export interface Employee {
  id: number;
  employee_name: string;
  employee_code?: string;
  employee_position?: string;
  department_id: number;
  department_name: string;
  join_date?: string;
  is_active?: boolean;
  email?: string;
  phone?: string;
}

export interface AttendanceRequest {
  id: number;
  employee_id: number;
  employee_name: string;
  request_type: string;
  request_date: string;
  start_date: string;
  end_date?: string;
  reason?: string;
  status: string;
  approved_by?: string;
  created_at: string;
  department_name?: string;
}

export interface AttendanceFilter {
  employeeId?: number | string;
  departmentId?: string | number;
  startDate?: string;
  endDate?: string;
  status?: string;
  type?: string;
  shiftId?: number | string;
  locationType?: string;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface LateEarlyRecord {
  id: number;
  employee_id: number;
  employee_name: string;
  department: string;
  attendance_date: string;
  attendance_type: string;
  scheduled_start: string;
  scheduled_end: string;
  actual_start: string;
  actual_end: string;
  time_deviation: number;
  reason?: string;
  status: string;
}

export interface HourAccount {
  id: number;
  employee_id: number;
  employee_name: string;
  department_name: string;
  date: string;
  clock_in: string;
  clock_out: string;
  productive_hours: number;
  overtime: number;
  break_hour: number;
  idle_time?: number;
  status: string;
}

export interface DepartmentSummary {
  department_id: string;
  department_name: string;
  total: number;
  status_counts: StatusCount[];
  date_range: {
    start_date: string;
    end_date: string;
  };
}

export interface StatusCount {
  status: string;
  count: number;
  percentage: number;
}

export interface ErrorResponse {
  error: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}