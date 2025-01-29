import React from 'react';

export const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <ul className="flex space-x-6">
        <li>
          <a href="/admin/admin-users" className="hover:text-gray-400">Dashboard</a>
        </li>
        <li>
          <a href="/admin-users" className="hover:text-gray-400">Users</a>
        </li>
        <li>
          <a href="/admin/admin-setting" className="hover:text-gray-400">Settings</a>
        </li>
        <li>
          <a href="/logout" className="hover:text-gray-400">Logout</a>
        </li>
      </ul>
    </nav>
  );
};
