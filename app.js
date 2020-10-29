let sd = "<p>2007, Saya masuk Sekolah dasar di kampung, SD DDI Siboang. Tahun itu adalah tahun pertama sekolah itu buka. Sehingga saya adalah murid angkatan pertama di SD DDI Siboang.</p>";
let smp = "<p>Tahun 2013, saya melanjutkan Sekolah Menengah Pertama di MTS Negeri Palu barat. Berjarak sekitar 200km , dengan menempuh 5-6 jam perjalanan dari kampung.</p>";
let sma = "<p>Lulus dari MTS tahun 2016, kemudian melanjutkan ke SMA Negeri 6 Palu.</p>";
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
        // title
        $('.tbiodata').removeClass('t_out');
        $('.tbiodata').addClass('t_in');
    } else if (scroll < 60) {
        $('.biodata').removeClass('biodata_in');
        $('.biodata').addClass('biodata_out');
        // title
        $('.tbiodata').removeClass('t_in');
        $('.tbiodata').addClass('t_out');
    }

    // pendidikan
    console.log(scroll);
    if (scroll > 500) {

        // title
        $('.tpendidikan').removeClass('t_out');
        $('.tpendidikan').addClass('t_in');

        if (scroll > 600) {

            $('.urutan_tahun').removeClass('t_out');
            $('.urutan_tahun').addClass('t_in');
        }
    } else if (scroll < 500) {
        // title
        $('.tpendidikan').removeClass('t_in');
        $('.tpendidikan').addClass('t_out');

        $('.urutan_tahun').removeClass('t_in');
        $('.urutan_tahun').addClass('t_out');
    }

    // pendidikan deskripsi
    if (scroll > 900) {
        $('.deskripsi').removeClass('t_out');
        $('.deskripsi').addClass('t_in');
    } else if (scroll < 900) {
        $('.deskripsi').removeClass('t_in');
        $('.deskripsi').addClass('t_out');
    }


    // title skills
    if (scroll > 1100) {
        $('.tskills').removeClass('t_out');
        $('.tskills').addClass('t_in');
    } else if (scroll < 1100) {
        $('.tskills').removeClass('t_in');
        $('.tskills').addClass('t_out');
    }
    // skills


    if (scroll > 1200) {
        $('.skills').removeClass('t_out');
        $('.skills').addClass('t_in');
    } else if (scroll < 1200) {
        $('.skills').removeClass('t_in');
        $('.skills').addClass('t_out');
    }
})