// ข้อมูลสมาชิกองค์กร
const organizationData = {
    members: 35, // จำนวนสมาชิกทั้งหมด
    executives: 6, // จำนวนผู้บริหาร
    networks: 4 // จำนวนเครือข่าย
};

// ฟังก์ชันสำหรับแสดงข้อมูล
function displayOrganizationData(data) {
    document.getElementById("members").textContent = `จำนวนสมาชิกทั้งหมด: ${data.members} คน`;
    document.getElementById("executives").textContent = `จำนวนผู้บริหาร: ${data.executives} คน`;
    document.getElementById("networks").textContent = `จำนวนพันธมิตร: ${data.networks} กลุ่ม`;
}

// เรียกฟังก์ชันเมื่อโหลดหน้าเว็บเสร็จ
window.onload = () => {
    displayOrganizationData(organizationData);
};

