export const callHslToNcs = async (h, s, l) => {
    const response = await fetch('/api/ncs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ h, s, l })
    });

    if (response.ok) {
      const data = await response.json();
      return data.color;
    } else {
      console.error('Error calling the function');
      return "FAILED";
    }
}
