import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ collapsed, userRole }) {
  const [open, setOpen] = useState({
    product: false,
    employee: false,
    role: false,
  });
  // Sidebar reveal state
  const [visible, setVisible] = useState(false);

  // Handler for mouse enter/leave
  const handleSidebarEnter = () => setVisible(true);
  const handleSidebarLeave = () => setVisible(false);

  return (
    <>
      {/* Hotspot for revealing sidebar */}
      <div
        className="fixed top-0 left-0 h-full w-2 z-50 bg-transparent cursor-pointer"
        onMouseEnter={handleSidebarEnter}
      ></div>
      {/* Sidebar itself */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-40
          transition-all duration-500 ease-in-out
          ${visible ? 'translate-x-0 w-64' : '-translate-x-full w-64'}
          bg-white/10 backdrop-blur-xl border-r border-white/20 shadow-xl rounded-r-3xl overflow-hidden
        `}
        onMouseLeave={handleSidebarLeave}
        onMouseEnter={handleSidebarEnter}
        style={{ minWidth: '16rem', maxWidth: '16rem' }}
      >
        <nav className="h-full flex flex-col py-4">
          {/* Brand */}
          <div className={`flex items-center px-4 mb-6 ${collapsed ? "justify-center" : ""}`}>
            <NavLink to="/dashboard" className="flex items-center">
              <div className="flex items-center">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-blue-600/50 rounded-lg blur opacity-70 transition-all duration-500 ${collapsed ? 'scale-90' : 'scale-100'} group-hover:opacity-100`}></div>
                  <div className={`relative bg-white/90 rounded-lg p-2 shadow-lg transition-all duration-500 ${collapsed ? 'scale-90' : 'scale-100'} group-hover:bg-white/100`}>
                    <svg className={`w-8 h-8 text-cyan-700 transition-all duration-500 transform ${collapsed ? 'rotate-0 scale-90' : 'rotate-12 scale-100'} group-hover:rotate-45 group-hover:scale-110`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                {!collapsed && (
                  <div className="ml-3">
                    <div className="relative">
                      <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-800 bg-clip-text text-transparent drop-shadow-md transition-all duration-500 group-hover:from-cyan-400 group-hover:to-blue-600">
                        DexterDigi
                      </span>
                      <div className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                    </div>
                  </div>
                )}
              </div>
            </NavLink>
          </div>

          <div className="flex-1 px-3 space-y-1 overflow-y-auto">
            {/* Main Menu */}
            {!collapsed && (
              <div className="text-xs font-semibold text-cyan-400 uppercase px-2 mb-2 tracking-wider">
                Main Menu
              </div>
            )}
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${isActive ? 'bg-cyan-400/20 text-cyan-700 shadow-md' : 'text-white/80 hover:bg-white/20 hover:text-cyan-200 hover:scale-105'}
                `
              }
            >
              <span className="flex items-center justify-center w-5 h-5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </span>
              {!collapsed && <span>Dashboard</span>}
            </NavLink>

            {/* Employee Management */}
            {!collapsed && (
              <div className="text-xs font-semibold text-cyan-400 uppercase px-2 mt-6 mb-2 tracking-wider">
                Employee Management
              </div>
            )}
            <div className="space-y-1">
              <button
                onClick={() => setOpen((prev) => ({ ...prev, employee: !prev.employee }))}
                className={`flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${open.employee ? 'bg-cyan-400/20 text-cyan-700 shadow-md' : 'text-white/80 hover:bg-white/20 hover:text-cyan-200 hover:scale-105'}
                `}
              >
                <span className="flex items-center justify-center w-5 h-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left ml-3">Employees</span>
                    <svg
                      className={`w-4 h-4 text-cyan-300 transform transition-transform duration-300 ${open.employee ? 'rotate-90 scale-110' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
              {!collapsed && open.employee && (
                <div className="pl-4 space-y-1">
                  {userRole === 'Admin' && (
                    <NavLink
                      to="/employees/create"
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-300
                          ${isActive ? 'bg-cyan-400/20 text-cyan-700 font-medium shadow-md' : 'text-white/80 hover:bg-white/20 hover:text-cyan-200 hover:scale-105'}
                        `
                      }
                    >
                      <span className="flex items-center justify-center w-5 h-5 mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                      Add Employee
                    </NavLink>
                  )}
                  <NavLink
                    to="/employees"
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-300
                        ${isActive ? 'bg-cyan-400/20 text-cyan-700 font-medium shadow-md' : 'text-white/80 hover:bg-white/20 hover:text-cyan-200 hover:scale-105'}
                      `
                    }
                  >
                    <span className="flex items-center justify-center w-5 h-5 mr-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </span>
                    Employee List
                  </NavLink>
                </div>
              )}
            </div>

            {/* Role Management */}
            {!collapsed && (
              <div className="text-xs font-semibold text-cyan-400 uppercase px-2 mt-6 mb-2 tracking-wider">
                Role Management
              </div>
            )}
            <div>
              <button
                onClick={() => setOpen(prev => ({ ...prev, role: !prev.role }))}
                className={`flex items-center justify-between w-full px-3 py-2 text-sm transition-all duration-300
                  ${open.role ? 'bg-cyan-400/20 text-cyan-700 shadow-md' : 'text-white/80 hover:bg-white/20 hover:text-cyan-200 hover:scale-105'}
                `}
              >
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-5 h-5 mr-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </span>
                  Role Management
                </div>
                <svg
                  className={`w-4 h-4 text-cyan-300 transition-transform duration-300 ${open.role ? 'transform rotate-180 scale-110' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {!collapsed && open.role && (
                <div className="pl-4 space-y-1">
                  {userRole === 'Admin' && (
                    <NavLink
                      to="/roles/create"
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-300
                          ${isActive ? 'bg-cyan-400/20 text-cyan-700 font-medium shadow-md' : 'text-white/80 hover:bg-white/20 hover:text-cyan-200 hover:scale-105'}
                        `
                      }
                    >
                      <span className="flex items-center justify-center w-5 h-5 mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                      Create Role
                    </NavLink>
                  )}
                </div>
              )}
            </div>

            {/* Product Management */}
            {!collapsed && (
              <div className="text-xs font-semibold text-cyan-400 uppercase px-2 mt-6 mb-2 tracking-wider">
                Product Management
              </div>
            )}
            <div className="space-y-1">
              <button
                onClick={() => setOpen((prev) => ({ ...prev, product: !prev.product }))}
                className={`flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${open.product ? 'bg-cyan-400/20 text-cyan-700 shadow-md' : 'text-white/80 hover:bg-white/20 hover:text-cyan-200 hover:scale-105'}
                `}
              >
                <span className="flex items-center justify-center w-5 h-5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </span>
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left ml-3">Products</span>
                    <svg
                      className={`w-4 h-4 text-cyan-300 transform transition-transform duration-300 ${open.product ? 'rotate-90 scale-110' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
              {!collapsed && open.product && (
                <div className="pl-4 space-y-1">
                  <NavLink
                    to="/products/create"
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-300
                        ${isActive ? 'bg-cyan-400/20 text-cyan-700 font-medium shadow-md' : 'text-white/80 hover:bg-white/20 hover:text-cyan-200 hover:scale-105'}
                      `
                    }
                  >
                    <span className="flex items-center justify-center w-5 h-5 mr-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                    Add Product
                  </NavLink>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-300
                        ${isActive ? 'bg-cyan-400/20 text-cyan-700 font-medium shadow-md' : 'text-white/80 hover:bg-white/20 hover:text-cyan-200 hover:scale-105'}
                      `
                    }
                  >
                    <span className="flex items-center justify-center w-5 h-5 mr-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </span>
                    Product List
                  </NavLink>
                </div>
              )}
            </div>
          </div>

          {/* Version or Additional Info */}
          {!collapsed && (
            <div className="mt-auto pt-4 border-t border-white/20">
              <div className="px-4 py-2">
                <p className="text-xs text-cyan-200 text-center">
                  Version 1.0.0
                </p>
              </div>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}