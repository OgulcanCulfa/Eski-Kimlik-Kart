// Ön Sayfa Düzenleme



document.getElementById("on_buton").addEventListener("click", function(e) {

    e.preventDefault();


    const tc = document.getElementById("tc_input").value;
    document.getElementById("tc_kimlik_no").innerText = tc;


    const soyad = document.getElementById("soyad_input").value;
    document.getElementById("soyadi").innerText = soyad;


    const ad = document.getElementById("ad_input").value;
    document.getElementById("adi").innerText = ad;


    const baba = document.getElementById("baba_adi_input").value;
    document.getElementById("baba_adi").innerText = baba;


    const ana = document.getElementById("ana_adi_input").value;
    document.getElementById("ana_adi").innerText = ana;


    const dogum_yeri = document.getElementById("dogum_yeri_input").value;
    document.getElementById("dogum_yeri").innerText = dogum_yeri;


    const dogum_tarihi = document.getElementById("dogum_tarihi_input").value;
    document.getElementById("dogum_tarihi").innerText = dogum_tarihi;



});



// Arka Sayfa Düzenleme



document.getElementById("arka_buton").addEventListener("click", function(s) {

    s.preventDefault();


    const medeni = document.getElementById("medeni_hali_input").value;
    document.getElementById("medeni_hali").innerText = medeni;


    const din = document.getElementById("dini_input").value;
    document.getElementById("dini").innerText = din;


    const kan_grubu = document.getElementById("kan_grubu_input").value;
    document.getElementById("kan_grubu").innerText = kan_grubu;


    const il = document.getElementById("il_input").value;
    document.getElementById("il").innerText = il;


    const ilce = document.getElementById("ilce_input").value;
    document.getElementById("ilce").innerText = ilce;


    const mk = document.getElementById("m_k_input").value;
    document.getElementById("mahalle_koy").innerText = mk;


    const cilt_no = document.getElementById("cilt_no_input").value;
    document.getElementById("cilt_no").innerText = cilt_no;

    const aile_sira = document.getElementById("aile_sira_no_input").value;
    document.getElementById("aile_sira_no").innerText = aile_sira;


    const sira = document.getElementById("sira_no_input").value;
    document.getElementById("sira_no").innerText = sira;


    const verildigi_yer = document.getElementById("verildigi_yer_input").value;
    document.getElementById("verildigi_yer").innerText = verildigi_yer;


    const verilis_nedeni = document.getElementById("verilis_nedeni_input").value;
    document.getElementById("verilis_nedeni").innerText = verilis_nedeni;


    const kayit_no = document.getElementById("kayit_no_input").value;
    document.getElementById("kayit_no").innerText = kayit_no;


    const verilis_tarihi = document.getElementById("verilis_tarih_input").value;
    document.getElementById("verilis_tarihi").innerText = verilis_tarihi;


    const onceki_soyad = document.getElementById("onceki_soyadi_input").value;
    document.getElementById("onceki_soyadi").innerText = onceki_soyad;


});