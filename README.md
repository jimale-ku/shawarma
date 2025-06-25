# Halal Chick - Food Delivery App

A modern, full-stack food delivery application built with Next.js, TypeScript, and PostgreSQL. This app is designed for halal chicken delivery services, similar to Glovo.

## Features

- 🍗 **Menu Management** - Browse and order from a variety of halal chicken dishes
- 🛒 **Shopping Cart** - Add items to cart and manage quantities
- 📍 **Order Tracking** - Real-time order status updates
- 👤 **User Authentication** - Secure user registration and login
- 💳 **Payment Integration** - Multiple payment methods (Stripe integration ready)
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🚚 **Delivery Management** - Track delivery zones and fees
- ⭐ **Reviews & Ratings** - Customer feedback system

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe (ready for integration)
- **Deployment**: Vercel ready

## Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd halal-chick
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/halal_chick"

   # NextAuth
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"

   # JWT
   JWT_SECRET="your-jwt-secret-here"

   # Stripe (for payments)
   STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_key"
   STRIPE_SECRET_KEY="sk_test_your_stripe_secret"

   # App
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate

   # Push schema to database
   npm run db:push

   # (Optional) Open Prisma Studio to manage data
   npm run db:studio
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
halal-chick/
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── menu/              # Menu page
├── components/            # Reusable components
├── lib/                   # Utility functions
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── styles/                # Additional styles
```

## Database Schema

The app includes the following main entities:

- **Users** - Customer accounts and authentication
- **Categories** - Food categories (Grilled, Curry, etc.)
- **MenuItems** - Individual food items with prices
- **Orders** - Customer orders with status tracking
- **OrderItems** - Items within each order
- **Reviews** - Customer reviews and ratings
- **DeliveryZones** - Delivery areas and fees

## API Endpoints

- `GET /api/menu` - Fetch all menu items
- `POST /api/menu` - Create new menu item (admin)
- `GET /api/orders` - Fetch orders
- `POST /api/orders` - Create new order
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@halalchick.com or create an issue in the repository.

---

**Built with ❤️ for the halal food community** 