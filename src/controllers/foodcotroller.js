export const getjoongufoods = async (req, res) => {
    console.log("api");
    fetch("https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=10&serviceKey=8hv8MdZ5ohFKiIgfg2xfa2h8%2F5rZQVqXil4fU0pF0WA9NHUsCVoCksOzq%2FnldI8pC5Qge%2F0l%2B9LxTuXSkdtHSQ%3D%3D")
    .then(res => res.json())
    .then(data => {console.log(data); res.json(data)})
}