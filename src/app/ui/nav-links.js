import  Image  from 'next/image'
export default function NavLinks(){
  const googleImage = "https://drive.google.com/uc?export=view&id=1sS9JxgWlVm3IrYvRDc2X90soHTCpyvNB";
  return (
    <div className="nav_container">
      <Image
        src="https://drive.google.com/uc?export=view&id=1sS9JxgWlVm3IrYvRDc2X90soHTCpyvNB"
        width={300}
        height={110}
      />
    </div>
  )
}
