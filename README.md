# Food Delivery Tracking Interface (StablEat)

A modern food delivery tracking system with order management, dark mode, and real-time updates. Built with React, Tailwind CSS, and Vite.

![stablEat preview](https://github.com/user-attachments/assets/a54bc9e3-0987-4c39-8de8-13aceee84103)

## Deployment
Deployed at Netlify
https://stableat.netlify.app/

## Features

### Core Functionality
- **Order Tracking**: Real-time tracking of delivery stages (Preparation, Transit, Delivery Window)
- **Cart Management**: Add/remove items, adjust quantities, and calculate totals
- **Recent Orders**: View last 3 orders with expandable dropdown
- **Favorites System**: Bookmark favorite food items
- **Dark/Light Mode**: Toggle between color schemes
- **Responsive Design**: Works on mobile and desktop

### Key Components
- Sidebar navigation with dynamic cart counter
- Food cards with ratings and favorites
- Order form with distance-based delivery calculation
- Delivery time breakdown visualization
- Order history tracking
- Reward points system

## Technologies Used

- **Frontend**: 
  - React 18
  - Vite 4
  - Tailwind CSS 3
- **State Management**:
  - React Context API
  - Custom Hooks
- **Routing**: React Router 6
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 16+
- npm 8+

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/food-delivery-app.git
```
2. Install dependencies:
```bash
cd food-delivery-app
npm install
```
3. Start development server:
```bash
npm run dev
```
## Project Structure
```
.
src/
├── components/
│   ├── Sidebar.jsx
│   ├── FoodCard.jsx
│   ├── OrderForm.jsx
│   └── ...other components
├── context/
│   ├── CartContext.jsx
│   └── FavoritesContext.jsx
├── hooks/
│   └── useDeliveryTime.js
├── assets/
│   └── images/
├── App.jsx
└── main.jsx
```
## Key Functionality

### Managing Orders
1. Browse food items on Home page

2. Click "Add to Cart" or adjust quantities

3. Enter delivery distance for each item

4. View real-time price calculation

5. Track delivery progress in Orders section

### Using Dark Mode
1. Click the moon/sun icon in sidebar

2. Preferences saved in localStorage

### Favorites System
1. Click heart icon on food cards

2. View favorites in separate page

### Custom Hooks
1. useDeliveryTime: Calculates delivery times based on distance

2. Cart Context: Manages global cart state

3. Favorites Context: Handles favorite items storage

## Contributing
1. Fork the project

2. Create your feature branch (git checkout -b feature/AmazingFeature)

3. Commit your changes (git commit -m 'Add some AmazingFeature')

4. Push to the branch (git push origin feature/AmazingFeature)

5. Open a Pull Request


## Acknowledgments
React Community

Tailwind CSS Documentation

Vite Development Team
