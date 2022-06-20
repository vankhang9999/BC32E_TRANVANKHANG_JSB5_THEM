document.getElementById('btntinhTienThue').onclick=function(){
    var thueThuNhap=tinhThueThuNhap('tongThuNhap','soNguoiPhuThuoc');
    thueThuNhap=Intl.NumberFormat('etc').format(thueThuNhap);
    var hoVaTen=document.getElementById('hoVaTen').value;
    document.getElementById('ketQua_b3').innerHTML='Họ tên: '+hoVaTen+' Tiền thuế thu nhập cá nhân: '+thueThuNhap;

}

//
function tinhThueThuNhap(id1,id2){//input
    //var fullName=document.getElementById(name).value;
    var tongThuNhap=Number(document.getElementById(id1).value);
    var nguoiPhuThuoc=Number(document.getElementById(id2).value);
    var thuNhap=0;
    var thueSuat=0;
    //progress
    thuNhap=tongThuNhap-(4e+6)-(Number(nguoiPhuThuoc)*1600000);

    if(thuNhap<=(60e+6)){
        thueSuat=thuNhap*0.05;
    }else if(thuNhap<=(120e+6)){
        thueSuat=thuNhap*0.1;
    }else if(thuNhap<=(210e+6)){
        thueSuat=thuNhap*0.15;
    }else if(thuNhap<=(384e+6)){
        thueSuat=thuNhap*0.2;
    }else if(thuNhap<=(624e+6)){
        thueSuat=thuNhap*0.25;
    }else if(thuNhap<=(960e+6)){
        thueSuat=thuNhap*0.3;
    }else{
        thueSuat=thuNhap*0.35
    }

    return thueSuat;///out
}
///////
var x=document.getElementById('selecti').value;
if(x===doanhNghiep){
    document.getElementById(x).onclick=function(){
        var y=document.getElementById('soKetNoi');
        y.style.visibility='visible';
    }
}