// Simple test to check if your backend API is working
// Open this in your browser console (F12) on your live site

fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    message: 'Hello from test'
  })
})
.then(response => {
  console.log('Response status:', response.status);
  return response.text();
})
.then(data => {
  console.log('Response data:', data);
})
.catch(error => {
  console.log('Error:', error);
});