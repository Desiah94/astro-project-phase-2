export const fetchData = async () => {
try {
    const response = await fetch('http://localhost:3001');
    if (!response.ok) {
    throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
} catch (error) {
    console.error('Error fetching data:', error);
    return null;
}
  };
  