import type { Role } from "../../types/auth/role.type"; // your Role = 'ADMIN' | 'EMPLOYEE' | 'SHOPPER' | string
export const isEmployeeOrAdmin = (r?: Role) => r === 'EMPLOYEE' || r === 'ADMIN';
export const isShopper = (r?: Role) => r === 'SHOPPER';
