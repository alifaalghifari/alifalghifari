let sd = "<p>Masuk SD</p>";
let smp = "<p>Masuk SMP</p>";
let sma = "<p>Masuk SMA</p>";
let kuliah = "<p>Masuk kuliah</p>";

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