/**BÀI 1:Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.

Bước 2: Xử lý:
_ nếu là ngày 1 thì sẽ lùi lại ngày 30/31 của tháng trước( tùy vào tháng có bn ngày)
_ nếu ngày 30/31 (tùy tháng) thì ngày tiếp theo là ngày 1 của tháng tiếp theo
_ Riêng tháng 2 có 28 ngày(29 ngày nếu năm nhuận).ngày tiếp theo là ngày 1 của tháng sau
_nếu là ngày 1/1/YYYY , lùi lại của nó sẽ là ngày 31/12/(YYYY-1)
_Nếu là ngày 31/12/YYYY , thì ngày tiếp theo của nó sẽ là sang năm mới đúng vào ngày 1/1/(YYYY+1)

Bước 3: xuất output:
xuất ra thông tin. ngày tiếp theo và ngày trước đó của ngày đã cho trước
_nếu nhập sai định dạng (ngày<1 và ngày>31 và tháng<1 và tháng>12) sẽ báo lỗi cho người dùng nhập lại
 */
var getEle = function (id) {
  return document.getElementById(id);
};
var ngayTiepTheo = getEle("idNgayTiepTheo");
var ngayTruocDo = getEle("idNgayTruocDo");
var ngayTruoc = function () {
  var ngay = getEle("idNgay").value;
  var thang = getEle("idThang").value;
  var nam = getEle("idNam").value;
  if (ngay >= 1 && ngay <= 31 && thang >= 1 && thang <= 12) {
    if (ngay == 1 && thang == 3) {
      if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
        ngay = 29;
        thang--;
      } else {
        ngay = 28;
        thang--;
      }
    } else if (
      ngay == 1 &&
      ((thang <= 7 && thang % 2 !== 0) ||
        (thang > 8 && thang <= 12 && thang % 2 === 0))
    ) {
      ngay = 30;
      if (thang == 1) {
        ngay = 31;
        thang = 12;
        nam--;
      } else {
        thang--;
      }
    } else if (ngay != 1) {
      ngay--;
    } else {
      ngay = 31;
      thang--;
    }
  } else {
    alert("Bạn đã nhập sai định dạng có thể dẫn tới sai kết quả, mời nhập lại");
    ngayTruocDo.style.display = "none";
  }
  ngayTruocDo.style.display = "block";

  ngayTruocDo.innerHTML = " ngày " + ngay + " tháng " + thang + " năm " + nam;
};

var ngayTiep = function () {
  var ngay = getEle("idNgay").value;
  var thang = getEle("idThang").value;
  var nam = getEle("idNam").value;
  //tinh ngay tiep theo
  if (ngay >= 1 && ngay <= 31 && thang >= 1 && thang <= 12) {
    if (thang == 2 && ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0)) {
      if (ngay == 29) {
        ngay = 1;
        Number(thang++);
      } else if (ngay < 29) {
        Number(ngay++);
      } else {
        alert(
          "Bạn đã nhập sai định dạng có thể dẫn tới sai kết quả, mời nhập lại        "
        );
        ngayTiepTheo.style.display = "none";
        ngayTruocDo.style.display = "none";
      }
    } else if (ngay >= 29 && thang == 2) {
      alert(
        "Bạn đã nhập sai định dạng có thể dẫn tới sai kết quả, mời nhập lại"
      );
      ngayTiepTheo.style.display = "none";
      ngayTruocDo.style.display = " none";
    } else if (
      (ngay == 31 &&
        ((thang <= 7 && thang % 2 != 0) ||
          (thang > 8 && thang <= 12 && thang % 2 == 0))) ||
      (ngay == 30 &&
        ((thang <= 7 && thang % 2 == 0) ||
          (thang > 8 && thang <= 12 && thang % 2 != 0)))
    ) {
      ngay = 1;
      if (thang == 12) {
        thang = 1;
        Number(nam++);
      } else {
        Number(thang++);
      }
    } else {
      Number(ngay++);
    }
  } else {
    alert("Bạn đã nhập sai định dạng có thể dẫn tới sai kết quả, mời nhập lại");
    ngayTiepTheo.style.display = "none";
  }
  // ngayTiepTheo.style.display = "block";

  ngayTiepTheo.innerHTML = "ngày " + ngay + " tháng " + thang + " năm " + nam;
};

getEle("btnKq1").onclick = function () {
  ngayTruoc();
  ngayTiep();
};
// getEle('btnKqTiepTheo').onclick = function(){
//   ngayTiep();
//  }
/**BÀI 2
 * Bước 1: khai báo input: nhập vào nhapThang và nhapNam
 * Bước 2: _xét trường hợp tháng 2: xét xem nhapNam có phải là năm nhuận hay không bằng cách (nhapNam % 4 == 0 && nhapNam % 100 != 0) || nhapNam % 400 == 0) => nếu chia hết thì đó là năm nhuận và khi đó nếu nhapThang=2 thì tháng đó sẽ có 29 ngày và ngược lại nếu không phải năm nhuận thì tháng 2 sẽ là 28 ngày
 *_ xét chung: nếu là các tháng 1 3 5 7 8 10 12 thì sẽ có 31 ngày trong tháng, còn lại tháng 4 6 9 11 sẽ có 30 ngày trong tháng/.
 * Bước 3:_ xuất output: sau khi nhập tháng năm sẽ xuất ra Tháng này có ... ngày.
 * _Nếu nhập sai định dạng tháng>12 và tháng<1 sẽ bị báo lỗi cho người dùng nhập lại.
 */
var xuatNgay = getEle("idXuatNgay");
var loiNhap = getEle("idLoiNhap");
getEle("btnKq2").onclick = function () {
  var nhapThang = getEle("idNhapThang").value;
  var nhapNam = getEle("idNhapNam").value;

  if (nhapThang > 12 || nhapThang < 1) {
    loiNhap.innerHTML = "Nhập sai, mời nhập lại !";
    loiNhap.style.display = "block";
  } else if (
    nhapThang == 2 &&
    ((nhapNam % 4 == 0 && nhapNam % 100 != 0) || nhapNam % 400 == 0)
  ) {
    xuatNgay.innerHTML = "29";
    loiNhap.style.display = "none";
  } else if (nhapThang == 2) {
    xuatNgay.innerHTML = "28  ";
    loiNhap.style.display = "none";
  } else if (
    (nhapThang <= 7 && nhapThang % 2 === 0) ||
    (nhapThang >= 8 && nhapThang <= 12 && nhapThang % 2 !== 0)
  ) {
    xuatNgay.innerHTML = "30";
    loiNhap.style.display = "none";
  } else {
    xuatNgay.innerHTML = "31";
    loiNhap.style.display = "none";
  }
};

/**BÀI 3 
 * Bước 1: nhập input. nhập vào 1 số nguyên có 3 chữ số với biến docSoNguyen.
 * Bước 2: tách lần lượt các ký số ra bằng cách dùng hàm Math.floor 
 * soHangTram = Math.floor((docSoNguyen % 1000) / 100);
   soHangChuc = Math.floor((docSoNguyen % 100) / 10);
   soHangDv = Math.floor(docSoNguyen % 10);
   Bước 3: xuất output cachDoc
   Cách đọc của số nguyên này là:
*/
var cachDoc = getEle("idCachDoc");
getEle("btnKq3").onclick = function () {
  var docSoNguyen = getEle("idDocSoNguyen").value;

  var soHangTram = Math.floor((docSoNguyen % 1000) / 100);
  var soHangChuc = Math.floor((docSoNguyen % 100) / 10);
  var soHangDv = Math.floor(docSoNguyen % 10);
  if (docSoNguyen >= 100 && docSoNguyen <= 999) {
    if (soHangChuc == 0 && soHangDv == 0) {
      cachDoc.innerHTML = soHangTram + " trăm ";
    } else if (soHangChuc == 0) {
      cachDoc.innerHTML = soHangTram + " trăm " + " lẻ " + soHangDv;
    } else if (soHangChuc == 1 && soHangDv == 0) {
      cachDoc.innerHTML = soHangTram + " trăm " + " mười ";
    } else if (soHangChuc == 1) {
      cachDoc.innerHTML = soHangTram + " trăm mười " + soHangDv;
    } else {
      cachDoc.innerHTML =
        soHangTram + " trăm " + soHangChuc + " mươi " + soHangDv;
    }
    cachDoc.style.display = "block";
  } else {
    alert("Bạn đã nhập sai định dạng, mời nhập lại...");
    cachDoc.style.display = "none";
  }
};

/**BÀI 4 */

var xuatOzA = getEle("xuatOzA");
var xuatOzB = getEle("xuatOzB");
var xuatOzC = getEle("xuatOzC");
getEle("btnKq4").onclick = function () {
  var oxA = getEle("idOxA").value;
  var oyA = getEle("idOyA").value;
  var oxB = getEle("idOxB").value;
  var oyB = getEle("idOyB").value;
  var oxC = getEle("idOxC").value;
  var oyC = getEle("idOyC").value;
  var ozA = Math.round(Math.sqrt(oxA * oxA + oyA * oyA) * 100) / 100;
  var ozB = Math.round(Math.sqrt(oxB * oxB + oyB * oyB) * 100) / 100;
  var ozC = Math.round(Math.sqrt(oxC * oxC + oyC * oyC) * 100) / 100;

  if (ozA > ozB && ozA > ozC) {
    xuatOzA.innerHTML = "Văn Minh Thuận" + " với khoảng cách " + ozA + " km";
  } else if (ozB > ozC && ozB > ozA) {
    xuatOzB.innerHTML = "Văn Diệu Hiền" + " với khoảng cách " + ozB + " km";
  } else {
    xuatOzC.innerHTML = "Văn Anh Thư" + " với khoảng cách " + ozC + " km";
  }
};
