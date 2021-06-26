var tanggal = prompt(`masukan tanggal(1-31)`)
var bulan = prompt(`masukan bulan(1-12)`)
var tahun = prompt(`masukan tahun (1900-2200)`)

switch ( bulan ) {
    case '1':
    alert(`${tanggal} januari ${tahun}`);
    break;

    case '2':
    alert(`${tanggal} febuari ${tahun}`);
    break;

    case '3':
    alert(`${tanggal} maret ${tahun}`);
    break;

    case '4':
    alert(`${tanggal} april ${tahun}`);
    break;

    case '5':
    alert(`${tanggal} mei ${tahun}`);
    break;

    case '6':
    alert(`${tanggal} juni ${tahun}`);
    break;

    case '7':
    alert(`${tanggal} july ${tahun}`);
    break;

    case '8':
    alert(`${tanggal} agutus ${tahun}`);
    break;

    case '9':
    alert(`${tanggal} september ${tahun}`);
    break;

    case '10':
    alert(`${tanggal} oktober ${tahun}`);
    break;

    case '11':
    alert(`${tanggal} november ${tahun}`);
    break;

    case '12':
    alert(`${tanggal} desember ${tahun}`);
    break;
}