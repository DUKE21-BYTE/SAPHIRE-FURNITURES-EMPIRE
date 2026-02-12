# Saphire Furnitures - Full Stack Development Roadmap

This document outlines the remaining steps to transform the current frontend prototype into a fully functional, production-ready full-stack e-commerce application.

## 1. Backend & Infrastructure

- [ ] **Database Setup**
  - [ ] Choose a database (PostgreSQL recommended via Supabase or Neon).
  - [ ] Set up Prisma ORM.
  - [ ] Design Schema:
    - `User` (Customers & Admins)
    - `Product` (Name, Price, Category, Stock, Images, Dimensions)
    - `Order` (User, Items, Status, PaymentDetails)
    - `OrderItem` (Product, Quantity, CustomConfig)
    - `CustomOrder` (For the builder requests)
- [ ] **API Development**
  - [ ] Create API routes for Products (GET, POST, PUT, DELETE).
  - [ ] Create API routes for Orders (Create, Update Status).
  - [ ] Integrate Maker/Checker logic if needed for custom orders.

## 2. Authentication & User Accounts

- [ ] **Auth Implementation** (Recommendation: Clerk or NextAuth.js)
  - [ ] Customer Login/Signup (Google, Email).
  - [ ] Admin Login (Protected Routes).
- [ ] **User Profile Dashboard**
  - [ ] View Order History.
  - [ ] Manage Saved Addresses.
  - [ ] View Wishlist.

## 3. Admin Dashboard (CMS)

- [ ] **Dashboard Layout**
  - [ ] Create a separate layout `/admin` with a sidebar.
  - [ ] Secure all `/admin` routes with middleware (Admin role check).
- [ ] **Product Management**
  - [ ] Add New Products (Image Upload via UploadThing or Cloudinary).
  - [ ] Edit/Delete existing products.
  - [ ] Manage Inventory/Stock levels.
- [ ] **Order Management**
  - [ ] View all incoming orders.
  - [ ] Update Order Status (Processing, Shipped, Delivered).
  - [ ] View Customer details for shipping.
- [ ] **Analytics**
  - [ ] Total Revenue Card.
  - [ ] Best Selling Products Chart.
  - [ ] Recent Orders Table.

## 4. Payment Integration

- [ ] **M-Pesa Integration** (Daraja API)
  - [ ] STK Push implementation for seamless checkout.
  - [ ] Callback handling to confirm payments.
- [ ] **Card Payments** (Stripe or Paystack)
  - [ ] Integration for international/card payments.

## 5. Advanced Features

- [ ] **Email Notifications** (Resend or SendGrid)
  - [ ] Order Confirmation emails.
  - [ ] "Order Shipped" updates.
  - [ ] Contact form auto-replies.
- [ ] **Reviews & Ratings**
  - [ ] Allow authenticated users to review products.
  - [ ] Admin moderation for reviews.

## 6. Deployment & CI/CD

- [ ] **Environment Variables**: configure `.env` safely.
- [ ] **Deployment**: Deploy full stack app to Vercel.
- [ ] **Database Hosting**: Ensure database is accessible by Vercel functions.
