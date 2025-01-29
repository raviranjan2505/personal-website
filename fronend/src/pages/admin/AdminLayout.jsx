import React from 'react';
import { AdminNavbar } from './AdminNavbar';
import { AdminSidebar } from './AdminSidebar';

export const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      <div className="flex flex-1 pt-[40px]"> {/* Padding-top to prevent navbar overlap */}
        <AdminSidebar /> {/* Reusable Sidebar */}
        <div className="flex-1 p-6 bg-gray-100">{children}</div>
      </div>
    </div>
  );
};
