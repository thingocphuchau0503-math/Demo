// Thay URL Web App của bạn vào đây
export const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzA-9IVrTQGoUTkHUQjg5caKXHW9G6NWkdwIeHqP1eoSSH-qw12NE-NsXaZAr2txDU2qA/exec";

// Hàm đọc dữ liệu từ Google Sheets (GET)
export async function getSheetData(action, params = {}) {
  const query = new URLSearchParams({ action, ...params }).toString();
  const res = await fetch(`${SCRIPT_URL}?${query}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}

// Hàm ghi dữ liệu vào Google Sheets (POST)
export async function postSheetData(action, data = {}) {
  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, data })
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return json.data;
}