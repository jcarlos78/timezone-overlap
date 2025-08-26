# Time Zone Overlap Visualizer

An interactive web application to help teams in different time zones visualize and find overlapping work hours.

## 🚀 Features

- **Time Zone Selection**: Add multiple time zones with smart search
- **Work Hours Definition**: Configure start and end times for each zone
- **Timeline Visualization**: Intuitive interface with horizontal timeline
- **Overlap Highlighting**: Clear visual identification of overlap periods
- **Responsive Design**: Works perfectly on mobile and desktop devices
- **Real-Time Clock**: Visual indicator of current time in each zone

## 🛠️ Technologies

- **React 18**: Reactive user interface
- **Tailwind CSS**: Modern and responsive styling
- **Luxon**: Robust date and time zone handling
- **Babel Standalone**: JSX transpilation in the browser

## 📋 How to Run

### Option 1: Simple Local Server
```bash
# Clone the repository
git clone <repository-url>
cd time-zone-windows

# Install a simple HTTP server (if you don't have one)
npm install -g serve

# Run the server
npm start
# or
npx serve .
```

### Option 2: Python Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Option 3: Open Directly
You can open the `index.html` file directly in the browser, but using a local server is recommended to avoid CORS issues.

## 🎯 How to Use

1. **Add Time Zones**:
   - Use the search field to find cities or time zones
   - Set the work start and end times
   - Click "Add Time Zone"

2. **View Overlaps**:
   - Green areas show when ALL time zones overlap
   - Blue areas show individual work hours
   - Red line indicates current time

3. **Manage Zones**:
   - Click the "X" to remove a time zone
   - Add as many zones as you want for analysis

## 🌍 Supported Time Zones

The application includes the most popular time zones:
- Brazil (São Paulo)
- United States (New York, Los Angeles)
- Europe (London, Paris, Amsterdam, Berlin)
- Asia (Tokyo, Shanghai, Mumbai)
- Oceania (Sydney, Auckland)
- Latin America (Mexico, Buenos Aires)
- Africa (Cairo)

## 📊 Usage Example

Imagine a team with:
- **São Paulo**: 09:00 - 17:00
- **Los Angeles**: 09:00 - 17:00  
- **Amsterdam**: 09:00 - 17:00

The application will automatically show that the best meeting time is **13:00 - 17:00** São Paulo time (which corresponds to 09:00 - 13:00 in Los Angeles and 18:00 - 22:00 in Amsterdam).

## 🎨 Design Features

- **Modern Interface**: Clean design with rounded corners and soft shadows
- **Clean Code**: Well-commented and organized following best practices
- **Responsive**: Adaptable to different screen sizes
- **Accessible**: Contrasting colors and intuitive navigation
- **Performance**: Optimized real-time calculations

## 📱 Responsiveness

The application is fully responsive and works on:
- **Desktop**: Complete layout with multiple columns
- **Tablet**: Layout adapted for medium screens
- **Mobile**: Interface optimized for mobile devices

## 🔧 Code Structure

The code is organized into well-defined React components:

- `App`: Main component with state management
- `TimezoneSelector`: Interface for adding new time zones
- `Timeline`: Main timeline visualization
- `TimezoneRow`: Individual row for each time zone

## 📄 License

MIT License - Feel free to use, modify and distribute.