let sd = "<p>2007, Saya masuk Sekolah dasar di kampung, SD DDI Siboang. Tahun itu adalah tahun pertama sekolah itu buka. Sehingga saya adalah murid angkatan pertama di SD DDI Siboang.</p>";
let smp = "<p>Tahun 2013, saya melanjutkan Sekolah Menengah Pertama di MTS Negeri Palu barat. Berjarak sekitar 200km , dengan menempuh 5-6 jam perjalanan dari kampung.</p>";
let sma = "<p>Lulus dari MTS tahun 2016, kemudian SMA Negeri 6 Palu.</p>";
let kuliah = "<p>Saat ini saya sedang menempuh pendidikan strata 1 Teknik Informatika Universitas Tadulako.</p>";

function deskripsi(target) {
    if (target.hasClass('sd')) {
        $('.deskripsi').html(sd);
    } else if (target.hasClass('smp')) {
        $('.deskripsi').html(smp);
    } else if (target.hasClass('sma')) {
        $('.deskripsi').html(sma);
    } else {
        $('.deskripsi').html(kuliah);
    }
}
deskripsi($('.sd'));

$('.urutan_tahun').on('click', (e) => {
    let target = $(e.target);

    $('.urutan_tahun div').addClass('no_check');

    $('.urutan_tahun div').removeClass('check');


    if (e.target.nodeName === 'DIV') {
        target.addClass('check');
        target.removeClass('no_check');
        deskripsi(target)

    } else {
        target.parent().addClass('check');
        target.parent().removeClass('no_check');
        deskripsi(target.parent())

    }


    // deskripsi
})

// Prallax

$('.header .interests, .avatar').css({
    'transform': 'translateY(0px)',
    'transition': '1.5s'
})

$(window).scroll(() => {
    let scroll = $(this).scrollTop();

    // Header
    $('.interests').css({
        'transform': 'translate(0px,' + scroll / 1.2 + '%)',
        'transition': '0s'
    });


    // Biodata
    if (scroll > 40) {
        $('.biodata').addClass('biodata_in');
    } else if (scroll < 40) {
        $('.biodata').removeClass('biodata_in');

        $('.biodata').addClass('biodata_out');
    }

})