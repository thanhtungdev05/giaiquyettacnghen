function changeLight(color) {
    const lightStatus = document.getElementById('current-light');
    lightStatus.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    
    // Giả lập cập nhật dữ liệu lưu lượng
    const trafficData = Math.floor(Math.random() * 100); // Giả lập số liệu lưu lượng
    document.getElementById('traffic-data').textContent = `Số liệu lưu lượng: ${trafficData}`;
    
    // Cập nhật báo cáo phân tích
    document.getElementById('analysis-report').textContent = `Báo cáo: Lưu lượng giao thông hiện tại là ${trafficData}.`;
}