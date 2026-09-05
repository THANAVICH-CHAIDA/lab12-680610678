interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

export type { TaskCardProps };

interface FooterProps {
  year: string;
  fullName: string;
  studentId: number | string;

}

export type { FooterProps };

interface SidebarProps {
  username: string;
  type: string;
}
export type { SidebarProps };



