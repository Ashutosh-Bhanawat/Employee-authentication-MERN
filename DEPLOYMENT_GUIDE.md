# MERN Stack Deployment Guide

## Issues Fixed

### 1. Frontend API Configuration
- ✅ Updated `authService.js` to use deployed backend URL
- ✅ Updated `employeeService.js` to use deployed backend URL
- ✅ Created `.env` file with proper environment variables
- ✅ All API calls now point to: `https://employee-authentication-mern.onrender.com`

### 2. Backend CORS Configuration
- ✅ Updated CORS to allow multiple Vercel domains
- ✅ Added regex pattern to allow all `.vercel.app` subdomains
- ✅ Added environment variable for frontend URL

## Next Steps

### 1. Deploy Backend Changes
Your backend needs to be redeployed with the new CORS configuration:
1. Commit and push the backend changes to your repository
2. Render will automatically redeploy your backend
3. Wait for deployment to complete

### 2. Deploy Frontend Changes
Your frontend needs to be redeployed with the corrected API URLs:
1. Commit and push the frontend changes to your repository
2. Vercel will automatically redeploy your frontend
3. Wait for deployment to complete

### 3. Environment Variables Setup

#### Backend (Render)
Make sure these environment variables are set in your Render dashboard:
```
FRONTEND_URL=https://your-vercel-app-url.vercel.app
JWT_SECRET=your-super-secret-jwt-key-here
MONGO_URI=mongodb+srv://ashutoshdexterdigi789:hdOHwp5Dj9E19LNE@cluster5.3bkhoif.mongodb.net/
PORT=5000
```

#### Frontend (Vercel)
Make sure these environment variables are set in your Vercel dashboard:
```
VITE_API_BASE_URL=https://employee-authentication-mern.onrender.com
VITE_BACKEND_URL=https://employee-authentication-mern.onrender.com
```

## Testing Your Application

### 1. Test Backend
Visit: `https://employee-authentication-mern.onrender.com/api/roles`
You should see a JSON response with roles data.

### 2. Test Frontend
1. Visit your Vercel URL
2. Try to register a new account
3. Try to login with: `admin@gmail.com` / `123456`
4. Check if the dashboard loads properly

## Common Issues & Solutions

### Issue: CORS Errors
**Solution**: Make sure your Vercel URL is added to the CORS configuration in the backend.

### Issue: 404 API Errors
**Solution**: Verify all API endpoints are using the correct base URL.

### Issue: Authentication Errors
**Solution**: Check if JWT_SECRET is properly set in backend environment variables.

## Default Admin Credentials
- Email: `admin@gmail.com`
- Password: `123456`

## API Endpoints
- Backend Base URL: `https://employee-authentication-mern.onrender.com`
- Auth: `/api/auth/*`
- Employees: `/api/employees/*`
- Roles: `/api/roles/*`
- Sidebar Menus: `/api/sidebar-menus`
- Permissions: `/api/permissions`

## Deployment Commands

### To redeploy everything:
```bash
# In your project root
git add .
git commit -m "Fix API URLs and CORS configuration"
git push origin main
```

Both Render (backend) and Vercel (frontend) will automatically redeploy when you push to your main branch.