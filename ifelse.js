alert('halo selamat datang di game ini, silahkan masukan nama anda')
var nama = prompt('masukan nama anda')
var peran = prompt(`halo ${nama} silahkan peran anda.
PILIH : maling, polisi, warga`)

if ( peran == 'maling'){
    alert(`ayo ${nama} segera melarikan, jangn sampai tertangkap`)
} else if ( peran == 'polisi'){
    alert(`ayo ${nama} segera tangkap maling nya`)
} else {
    alert (`ayo ${nama} bantu polisi tangkap maling nya`)
}