// ข้อมูลสมาชิกองค์กร
const organizationData = {
    members: 35, // จำนวนสมาชิกทั้งหมด
    executives: 8, // จำนวนผู้บริหาร
    networks: 4 // จำนวนเครือข่าย
};

// ฟังก์ชันเพื่อให้ตัวเลขเพิ่มขึ้นค่อยๆ
function animateNumber(element, targetNumber, duration) {
    let startNumber = 0;
    const stepTime = Math.abs(Math.floor(duration / targetNumber)); // คำนวณความเร็วในการเพิ่มตัวเลข

    const interval = setInterval(() => {
        startNumber += 1;
        element.textContent = startNumber;
        
        if (startNumber >= targetNumber) {
            clearInterval(interval);
        }
    }, stepTime);
}

// ฟังก์ชันสำหรับแสดงข้อมูล
function displayOrganizationData(data) {
    const membersElement = document.querySelector("#members .number");
    const executivesElement = document.querySelector("#executives .number");
    const networksElement = document.querySelector("#networks .number");

    // เริ่มการแสดงผลตัวเลขเพิ่มขึ้น
    animateNumber(membersElement, data.members, 2000);  // ตัวเลขเพิ่มขึ้นในเวลา 2 วินาที
    animateNumber(executivesElement, data.executives, 1500);
    animateNumber(networksElement, data.networks, 1000);
}

// เรียกฟังก์ชันเมื่อโหลดหน้าเว็บเสร็จ
window.onload = () => {
    displayOrganizationData(organizationData);
};
