import Swal from 'sweetalert2'

export const confirmAlert =  () =>
  Swal.fire({
    title: 'are you sure you want to delete this ticket?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
    } else return "Don't delete";
  });

 export const niceAlert =  (titleVal,iconVal) => Swal.fire({
    position: 'center',
    icon: iconVal,
    title: titleVal,
    showConfirmButton: false,
    timer: 2000
  })