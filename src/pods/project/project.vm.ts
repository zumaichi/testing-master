export interface Project {
  id: string;
  name: string;
  description: string; //agregado para q funcione los test de las listas vacias o co que contienen datos
  externalId?: string;
  comments?: string;
  isActive: boolean;
  employees: EmployeeSummary[];
}

export interface EmployeeSummary {
  id: string;
  isAssigned?: boolean;
  employeeName: string;
}

export const createEmptyProject = (): Project => ({
  id: '',
  name: '',
  description: '',
  externalId: '',
  comments: '',
  isActive: false,
  employees: [],
});
