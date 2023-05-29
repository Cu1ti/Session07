let physicsS=+prompt('Nhập điểm Vật Lý của bạn');
let chemistryS=+prompt('Nhập điểm Hóa Học của bạn');
let biologyS=+prompt('Nhập điểm Sinh Học của bạn');
let sum=physicsS+chemistryS+biologyS;
let medium=(physicsS+chemistryS+biologyS)/3;
document.write('Điểm tổng của bạn là : '+sum+ '<br>');
document.write('Điểm trung bình của bạn là : '+medium);