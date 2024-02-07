import NavbarC from "../components/NavbarC"
import FooterC from "../components/FooterC"
import CardsC from "../components/CardsC"
import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import CategoriasC from "../components/CategoriasC"
import '../css/CategoriasC.css'
import ProductsDestC from "../components/ProductsDestC"
import DoctorC from "../components/DoctorC"
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"></link>

const HomePage = () => {

  return (
    <>
      <NavbarC/>

      <CategoriasC/>

      <h2 className="titleHome">Productos Destacados</h2>
      <ProductsDestC/>

      <h2 className="titleHome">Profesionales</h2>
      <DoctorC/>
      
      <div className="div-publi">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSEhUQEhIVFBUVGBcaFhcYGBoYFhkWGRUYGhcaGBgaHSggGhslGxkZITIhJSorLi4uGR8zODMsNygtLisBCgoKDg0OGxAQFjUlICYtNy03LjMrLS0wLS0vMi8uLisrLS0rLS8tKystMisvLSsyMC4tKy0rLTAtKy42LS0tLf/AABEIAJUBUwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABCEAABBAAEBAQDBgQDBQkAAAABAAIDEQQSITEFBkFREyJhcTKBkQcUI0JSobHB0fAVYnMkU4KS4TM0NTZDdLKzwv/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAA3EQEAAgIBAwIDBQcCBwEAAAAAAQIDESEEEjFBUQVhcRMiMoHBFDNCcpGx8DWhIzRSgpLC0RX/2gAMAwEAAhEDEQA/AO4oCAgICAgIMOIxIZudUFexnGTmuiWhwHQWNdr3OmyDe+8ZW9NvreyCucSxUs1NjaXa+ehdU7Y6d9fYdtwiuNY2VrPDMgDnakusAH9JcCKNXW49OqDnnMrvAZ4jHOOJIOV2UjK020llHLdabAoHD2SOhbdW4Nt1dSMxN+pLjpW6CS4hIWSxNjflOZrb1FAVe19iPXMUH3i/D5MbiIoHOJAyl5pzT5WgguBAdYBOp9e6DovIkAwzfu7XEhpNXvd26r97+fqgviAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0eIY3J5RqSggOIzP0NEk6ZdR8yfnSCsc0Y04UtzOa5jtHtLQSHkafmqzTtd9AOxQSnKnEn4luYAlvmaHX10Jv6j90GxxnEjAxPkeW5nHU9enbbZBy3H81GaZoeS5huxrTj0BINg6bXt7oKlzPxgPnkLAQLIF710JPc7nvakbHBOJvcyKMADIKLj1yk1VdQK+nqoF+wXCTQL3FgaANCQSetkau639KCCSwBwWEjllnxHguduBZkyWG5qaC4WaHa7CCY5Fx8E873YeZ0rGi/Mwtc1xAO+xBBsaddyg6OEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEGOeTK0n6e6CGxEmRpcbJ6nr/dIKBzhzNJCzM05SCCT+nXUDTU9f8ArVBUMXx6GTCmPxHZwBIXEZi8h1uBvVoFaAfpvTVBucpcfnhiyw01rrOZ1nUnXLe/Tv8AxQbUs8+Le9rntAGXMTo49aHUCx2A0+oR3E+GMiEjS11EtzEgXlds8EbgOB22zC9kEHjuUTOWmMObI9oNEaGtN9garQnfRB95Z4TJhpnMlizEHQg9tN702B7IOp8N8V5b4kDY462zW5xNUTWw3065vdBD848viWPxmyeDIw20tGp01adLLdBXbLaC6/ZzwGPD4OJrL6F5NgucBQsHboa9AguKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDUx8oA12Gvz6BBose2XUjy9Ox9u//RBCc28qNxURiDmMB6uB39SN0FY4P9lcWHAc+cSu6kgNAFflbr766be4DHxbEwwMIbD4cbTle9sbSTbg0HxKABIJ9iAEEBGZnGV3wFm1giOMCqF2Ggda/wA3ug9cP4pGH5Xl8zhejYiBqBn8ziBlJ2GvTTS0FsgZCY8wblYPymqbe5BGnXUVSDKcDkIly5u+7uw2PpaCV4fxCDEZxE8GRlh8ZNPab1tu++x21QRXGQchFg9r3Go+XztBN8lcWF/d5DTyTlB3JG4+mqC4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwYzFtiaXuNAIKx4jsWSTpE00TqAf8re990Fe5x467DjyMJa38o7epHdBgHHnyQNdFkiLhZBcS1tjcmwLoiwQaIrdBA40SOvPiTKevlztABB0+EDTTYg0NRVAI3iuLysMcTDRA8nmdZblIsaakNrU15RtZQbOD4NiMVO5743taWhrHUGlseUAhpA0rUaVepuzSCx4LkRkbvGcSD2s1VDQ638+qCcxOHw7GmEuOYgW0akBw7HbQX7INKHFxyMfAwuYYWjei58bdnbCi3S/lqTaDmXLWOe7jIkiccsRqTUG43SNicLIFgeIDZ/TeiDpnNczmEmMWQASf0+YAgjvrt/Q0HN+KcwSYfFxSNAzRHPRJa0hhBNu22FWLuvVB+iOEcSjxMEeJiNslaHtOxojqOh6INxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBB5e8AEnYCz7BBUXcVinY+SdpDLPhh7XMzBvVoNOIutar3QVDmLnVzKEVBlCtfNXUgAmuo6eyDR4PiZcS0lxc5rm06/iab3AdelgC9yK90HniHC/BewuAMRqmMDbD61dVeawSD3vuEEphcdhWR5HwHToenvZNm/wCKDPFxyBh/ChY09TV9+wok97QTGB4lNIdA2iOn99q6oJIERsdLL5sg+ROqClYfxPNiJa8WTzHffWtOlAgV6Vsgg8Xj34aVro68Q0Ndq0zB2uoI39OyD7LyI4y/eeFlrfFa5s0EzgGsDjZaBo7IS0VWuiC/YXgONkgDpRhWz7PDS7I8CheavLYu2i+9jZBpcO+y/wASb71j5Q59V4UFtjqhYMjhnPoWZCKCDo0MTWNDGNDWgUABQA9Ag9oKRztzyMLKMNDlMuhe46hgOwoHVx39vcLlz9RNZ7avV6HoIzR35PHp80Li+d8TDlnaRNA4kAva1hcQfNlDDYrUC+m4tYftF453uHdPw7BeJrrVo9pmf7ui8I4izEwsxEZtkjbF7juD6g2D7LvpaLRuHgZcc47zS3mG4rMxAQEBAQEEX/jsZfG2MOlD3yML2AFjHxiy15JGUnYd1T7SN8Or9jvFbTfjUROp8zE+se/za+D5ka5sbnxPjD45JHOOV0cbYzRzvaaF7hVjLHG4aZOhtWbRW0TqYjXMTMz7RMeiYw07ZGNkY4Oa8BzSNi0iwR8lpExMbhx3palpraNTHDIpVEBAQEBAQEBAQEBAQEEVxSd3iNjFZSLPcuvQewq/ogo/2mYBzmCQu1jDi0gE1WvcVr77dEHM+B4uXFu8OUi81eawTWll2ahRsXRQdj5c4VFFGGtABrpdAk61dnUjv0CCM5uw0TSDIWtDtx1duaFfvqghcJwzDOaBGGtA6Cy7QjvYGtb9CNdUGz/gLmuGQW1x1G1DKTr03seloLzw3BiJgbufr7boNLjZzDw27WAfpbr9Kyj5lBR+M8bja7K07Cm1r13r6IIHgJGKxpnfZbHYa2zRPYjr0B9t9EHXfBy5MrQHlosgdBXldeu7rQb/AAB5Gdjn5nCj7DUfyQTCAgIOF/afwaWLHyTkExz5XNdqRYaGlpPe23XYhef1Eaty+i+HZItiiI9OFdDHOGUBx301+ei5dPTmeHc/s+4U/C4GKKSw+3uIP5c7y4D6EL1cFZikbfK9dkjJnma+PH9FjWrkEBAQEGrPxGJkjYnysbI4EtYXAOIF2QD00P0KrNoidTLWuDLek3rWZiPXXDXw/H8LJeTEwuoOJp7dA0AuO+wBBtRGSk+JaX6LqKfixzH5T6+P6q/xbhgnxA8DEQ+ZzJCHnxDHK2PNG6GK8oLmOLze+hWVqd1uJ/z5PR6fqJw4f+LjniJjjjcTOpi1vPE8R7eEeOExwTiKTG4ZoDAH5Q3Dztia7xQ0BprIXWXWLIPzVOyK21No/tLpnqb5sXfTDaeeN7tWZn7u+edxHj5rxLj4ozkdIxpy5spIHkBDc1drIHzXTNojjbwa4cl47orM86/P2+rGOMQG6mjNZb8w0zXl+uU17FO+vut+zZv+if6e3lutcCARsdQrMZjU6l9RAgICAgICAgICAUEVxXirY2kXlPdBB8CwVAuDnutxdme8ucSavroP8ooCtu4bnMbbj1otAt3tpoB6/wB2g4fwrCvMj5I2OyiWSqb0Dr6+/t7oLKzmpzXU51AVYH8yUEJxDjn33FZGfE0GiRpv+roB+/8AALly1w6Ow0OdI4m3OtoF7mvzXtqANAgvcLGtAFdkHuSUNsk12QU/m3ioERa12Uk6nQWDrQJ6mqNfqCDk3GMcGHM061QrVo2F3+bQV8taNoLJ9nkTnS7lrYWNd285Ic63erAW9fiKDr2CxGZpeTVjrsNM301Qa2BxQMzy92Ro3N000ep+fXZBaDK0DMXCu96V7oNPDcZhkkMLH5ngXQBqhvrt1Qb6DDisKyVuSRjXt3pwBF96PVRasWjUwvS9qTus6lo4Pl7DRODmQMDhsasg1Vi7orOuGleYhtfrM941a/6f2Si1cwg1OJcQbCwudqQHENG5ygk+226CNw/M0D43TCaPLGcspBBDDV053eqQbuD4syR2UEa/C4G2vBa1wIO2ocP3QSCCscxcntxcxmdKWgsazKBYqpQSddT+ICDWhb1uljkw98729Xo/ilumx9kV3zvf/j/8594n5MWI5QdLb5pYnS3BkIhqMNhc5wBZnNl2ZwOo0NbKs4d8zPP09lqfE4x6rjrMV+9v73O7Rrzr01Exx55MBylJBIJo8TneZM7zKyy4ljmv+At3zGu2g1pTXDNZ3EmX4lTNTsvj1GtRqfHMTHmJ9ufdmx/LMknjxtmY2KcvcQYs0ge9oaafmAy6XtfS6U2xTO43xPyZ4uvpTstNJm1dR+LUaid+Nefz+flpzcjlwaDiXHwg1sLi3ztjD7LHkEB4ILm7DTL21rOD5t6/F4iZmMf4uZjfEzrzHE69J9fX3ZYeSw2WOfxvMyRjjTaDmNs5CM36qIPSj3Uxh5idqW+KzOO2Ps4mJjz4mfXx7ei2rd5AgICAgICAgICAgIKtzLgxLma14aSKJvT6bfVBC8v8Yyw+Ecr5GN/EePgBvYAWb9PdBMYTHDEeQ6ZvLY1rX+9PRBv43hTYcK6LDRgGjXe9bcTuTv8AVB+ceICVj3ulBaLPxabCv5IIPA8YLLyAAuNnv8+/8PopHW+QeNHyMbh3ZnAW41VXvTRf1vcKB0RshaAD8R8zj2J7IKdzNzfBG4Rh+ck5dDQur1P7IOecU4vJiMue2tIcMg01sDzdRQ29+10FbB1iFVu2tSRWo+mYjTsVI659njQIcxABBt1bkvzAk73o/T26qBI4/HPbNlZ5mOoPIvyj8UtqtPMKP0QeeJMLoAGwl3ieYuNkAk7ll+atwDogrcDJ2xFj2V4WmQHKK7xEGmE3dUW6HRB0r7PeCmGHxXkuL/hsBpymtx0Ptp9UFuQEBAQEFX594VJNAXwupzQ4OFgNMZHmLr6AXoNxaDm3AuZHRY+PhoMH3aQNMsbmBznufHmJJOvVvQ/AK3JIXblaUYvEzlkZjgws4a1wyhj3sYNgDezmk6V5W1dmgucmNjbI2EvAkeCWt6kN+Ij2Ud0b00jFeaTeI4j1+rXbxvDmNswmaWPfka7oXkkZfewq99db20npM0Xmk0ncRvXy92LG8yYWKYYeSdjZXVTTfXazVNv1IUTlpE9szyvj6DqMmOctKTNY9f8APL5i+ZcLFIYJMRGyQEAtcaIJAIu9NiPqk5aROpkx9B1OSn2lMczHu+8S5jwuHf4c07I3UDROtHYpbLSs6mTD0PUZq92PHMw8HjLRNNckYhgjY6TcvDn24E9Gsyj1JvpWrv5nniE/sszjrqs91pmI9tRx+c7/AKfnx7wnMeFla98eIjc2Npc8g/C0bkjevVIy0nepRk6HqMdq1vjmJniPnLZn4pCyEYl0jREQ0h5+Gn1lPzsfVWm8RHdvhlXp8tsn2Va/e9vp5eeF8YgxIcYJWyBpAcW9CdkretvwynP0uXBMRlrrbeVmAgICAgICAgICCP4xhmuid0JBArufZBT5eHeDhy222678tXd738voglOUMIN6+E3630/j+yC1uNCyg/Nf2w8bGLxZjhjcyOG2EuBaXuoWQ0jRoFV3u1IjeQOVHTvEr2+X8rT+bufZB3fg/CGYZmtF53Jr+9v4lQIPjnHBIXYfDSZ3bSSNohmxytOoJ6envsFcxH2ftnbkrKRs6tTrpffaifX5INqHkpuHjt7/ABJr+KhdmhoPYAXvQQafH+Q42NMwORzAXEHtVk/RBFcucZdFEWE7vFHqAAXdPUfugsGBkMoLHGmOyMvXdrQyr9y4WdCg6FgOD5oWgHYED5EjZB8wXK7c1yAEXeXu6xqfTQILIAg+oCAgICCs898wxYXDyMc78SRjmsaBZ8wy2R0Au9UHDsHxEta2Pw3SRguErQG5adWQ66kspoo9kHbvs8wjYsMGsIIf59NrOhPvoPog+8V/8Vwf+jiP/wArC372v0l6uD/T8v8ANX9XPOG4hzIoYXfBNi4pYvdk7opR+zD81yVniI953/vp9JmpW+S+SvmtJrP51i1f1heuAcPjxD+JRzMD2vxVOBvUMawt1GuhXVjrFpvE+7wOrz5MFentjnUxT+8ztWuYZ8uJ4pCIc/jnCRB5IDYnOiphcTrqTuP06rDJP3rxrzqHqdHTeDpsk31299tetoiedf56phzpYeJOZHh/vThhYGuGdrKAcQXeff2C15jJxG+IcURjy9FE2ydkd9p8TPp44YOM/wDacb/0MP8A/U5Vv5yfSF+m/B0f81v7wj5XPcZzLEIHDhTxGAQ7xWVq8uFURp5fXdVn13GvuumsViKRS/dH20b9NT7a/VK8zf8Al+P/AEMJ/GJXyf8ALx9I/RydD/rFv5r/APst/BMRI9jnS4b7s7NQbmY+xQ81s03JFei6KTM+Y08bqaUpaIpk74151MflykVdzCAgICAgICAgIIviWMp7Waab+9af36oIXi7w4Bt6HU11PugluW4qYTVCwB8t/wB0Gxx2Yshe4OymtNAde2oKDh2P4MZZXOl3cQK/Ob0oDp/dIOj8t4EYeIOePNQAHYADTbSjf0Qc/wCbueXYl7sPhzUPma54/wDVbRBrT4D+/tQQSv2f4GRknhsYC06uv+9N0HVsPg9NdEGLD8DjY/xNSfU/3aCO584eJcLIche5rSWAaebue4G9baIODvYRI0EbFwra9NaPyH1QdQ5U4W4xeZugN++lADXc035hB0LheHMcbWnfUuruTZ/og20BAQEBBE8xYyWFjJYm5mtePFaBZMZaQa9Q4tPyQVrmr7R4cPhy+MO8UkNa1zaq7s+tUR70g5ti5Zp6nsvMj3tlLhYsZcuh2GU3Y7kdEEnyzw2i4Bgo5vh/UA406tT6DSxeqDpPI8BZAwP0db9L1y5jlB9kG5xLCx/fMPiXzsjLGyMbG6gXl9fCS4bVsAVSabvFvZ14+q7Onvh7fxTE737fJCjlaHw8PhDi2eNhpjNs3OWl5kc0x57AOmt/lBWf2H3Yjfidu3/9eftcmSKcXr2638tb8f5t4x/DI5JJXRcTjihxL43TMa5hdnAFeHIHjLnAHf5jRLYZmZ1PEow/EqVx0i+LutSJiJ3xz7xrnTbxnLsMsuOiOJZ4mLbDUemeIws8rqz27WndNknDvu58/orj+JzjjDqv7vfr57p5jxx7erLi+WcSZ/vMWOEUhhZG8+A1+bJZLgHP0sm61ruUnFbu7otrj2Tj6/p4xfZZMHdHdNo+9Ma36cQy4rlYvONcZtcZHGz4PgyMLb+LzXd1pSmcW+7nypT4jFIwxFP3czPnzud+3GvzasHJr8svj4syvfh3YeN3hBjY43D9Id5jdblVjDOp3bfGm1/itN1+zxdsRfvn725mY+euHiTk6d+EfgpccHxlkTYx4DW5BG5pGz7do2tT6qJwWmnZNuPomPimGnUR1FMGrbmZ+9M73E/Ljzvwn+C4OeMOGIxP3gkjKfCbFlFaimk2tqRaPxTv8nndTlw5Jj7LF2f9023/AFSSu5hAQEBAQEBAQEFTxrvO+V1Zi4MYD3sjY+mvsEHiaAnNsAQD6Zb1P8dUEVxj7RIYW+DhKkeANSHAbnMRYAPoRp/MKzieLYvFBuaQu9tBp1obf3ugsPCOHMa4SSnM86AHWjtZPzA+aCd4xwJ82EeMxDnC6Bq27kH3QcownB2iUA6EOB+mYm+4/r6oOxcn4FjYGShoBcL+VD+iCwoCDBjXARvLtBlN/RBxLgfL3j4p8hdcYe+u2hr+W/sg7JwzChoAy0G/D390EggICAgICD4Qg4X9s7v9tZGzIMsYIYG6uLjdGhuaHypBs8j4mN8GIEzKc12Yh1gltH4e406b6jog2+T8HE/ENzRvDZi8BzSQKDXOAcBteVw11sDug6Ly9E2P/Zwb8IUCdSR0JPcoNDjgY3GF08L5WSQMYwNYX28TEkA7NOrTqRsgjRAfvHh+G7xRi55S7Ia8B0Lg056qjYFXupEa3A/gO/C1/wANZ+TXP4r76fFt67IJPCwn7wyPI7xRjDKXZDXgGAi/Eqq2FXugvigEBAQEBAQEBAQEBAQEBBA4/gb34gTh4cyjUTvKGuJbbg4NJNgHQ+2llBXeNcPkjlnYJZcs9WKblaHMDC1prM3RvTq7pegQ8XL0LCZJNffY6fwQT/BcH4rahjIFfG6wz2Fb+w+aCwYDgLWEPkcXuG2lNGlbb/ug3+J4kRQySnZjHO+jSUHEMLj2yOLiQC4EWO5af4EjRB2Dk6PLgcM07iJl3vda/vaCZQEFG+1bjn3eGKIXmnfQr0r+ZHzpBpfZuA+2BoyNuzdgkiz/ABCDoyAgICAgICAg5ZxPgUmI4yHvjtocDepAjDAA69txt7oJ3mXleCOACNoaC7U1Zy6urN+UZgD8kGtyHy4+F0zw7y/htjB1AAbbj88wHyQSPImZwkfIKeJJGO/4Ten/ADfsgyc68QxeHDZYJIhG50ceVzC52d7iM12NKrT0KwzWvXmJet8Mw9NnmaZazvUzuJ1xEePD0/ieJhxWBwsr43mcYjxXNYWg5GFzMtnTpad9q3rWfXaI6fBl6fNmpEx29utzvzOp22uVOLSYg4rxK/BxUsTKFeRlVfc67q2K823v0nTLr+mpgjF2fxUi0/WVbg5oxrYxjHmF0AxBhczIWyBviZMwddXt0WMZb67p8b09O3w/pJv9hWJi/Z3RO41vW9a0lMJj8bPisTHFLCyOCVradGS4tLQT5g7fforxa9rTETxDkyYekw9Pjtesza0TPE8e3s0MfzDjWnGzRugMWEkoscx2ZzaBPmB3oqtsl/vTHiHRh6HpJjDS8W7skeYmNRP003MdxjFy4tuHwr4mA4Vs/wCIwuslxFWCK6furWveb6r7bY4ul6bH085c8TM9814nXp5a2H5sxGIjwUcDY2TYnxS9zgSxghJDiGg3qRpqa29VEZbWisR5n9Gl/huDBfNbLMzWmtRHme7xzr0/z2TvKXGJMRHIJmtbLBK+KTLeUlleZoOoBBWmK82id+Y4cHxDpaYL1nHP3bVi0b88+kp1auAQEBAQEBAQEBAQYJ8Gx/xNB9eqD63CsFeRum2gv6oMqDDPi2MGZzgB7oOWfaJ9o41weGa6ninzaUQbBa1u/cEmj6IKbylwGTFSNDQ/K54ca3yj4teljLvSD9AcHwrooWRuILhZNbAklxA7gXV+iDcQEHO/tW4a53hTkBzG00CtWvc7cHYE6a/5T3CDQ+z2OXCyv8hfG92uwcCBWgJo1oDXZB03DYlrxbTtodCD9CgzICAgICAgIIrg+K8STEEEOySeH7ECyL/4h9UGzxiLNBK09WO9fylBH8m4nxMKxxFaVtVgaA/RBj4JKBicTFlrzlw9bok/PdBq/aN/3aP/ANxB/wDNYdR+GPrD1vg/7+38lv7MPM0gZxPhsjyGsAxILiaaCYqAJOmpIUZOMtJ+q/Q1m3QdRWsbn7vH5vX2eODhjXt1a/Gzlrhs5py0QeoTB/F9ZR8YjU4az5jHXfy8ojlDl37zFnknk8JmJkd4AyhhcyQ0Sasi+izxY++NzPG/Ds+Idd9hftpSO6aRHdzvUx/Rm4RhWu4hjHuxUkOTERkMbI1jZPKDT2keYdNO6tWN5LTvXP8AVTqMlq9HhrGKLbrPMxMzHPp7ILjuDcTj5/Ek8KPFxieJriGPiOXMSBrm217LK8fin5vQ6XLWIwY+2O6aT22nzE86/JK8y4J02PeMPK+NzeHh0fhnLmqR2VhP6TY/ZXyRM5J7Z/hcnRZq4ukrOasTE5dTv04jn6wx8GxELJeEyNqOJ0EzbJ8okrzguPUvv6pSYiaT6aT1OPLfH1VJ5tFqz+Xp/sn+QHh/32VurH4yUtd0cAGiweoWuD+Kfm8/4tE1+xpPmMcb+XlbFu8gQEBAQEBAQEHy0HwvCD54o7oPJxDe4+qCkc+czzRSRwQ4XETRuaHSvhGlEvHhhw1DrAJ2OU6anQOY8y8Vx0+IbIcLN4TWkNY2F4DSW0CR+bKTp669Ag0OAcLmfL+NHMPLo6SOQMbqBrTSTQ2aKutwg7Ry7jcNhIxHG2VxPxvMeUuPehoB2HRBOM47GejvogyjizOzvof6IPv+KN/S/wD5Xf0QYMZjWPYWPie5rtxld/RBz3hWOfhZ8j4pz+LI8uGGlLKLaADmtOmgI/fVBv4HmlzHYtow+KrP4kF4ebXM1jiz4ND4heOwCC9cM4gZo2yeG5t3o4Oa7QkbOAPS0G4HHsg+goPSAg+FBgxjJCxwic1ry05HObmaHVoS0EWAelhBXuWuBYnBifzwSGaZ0pIa9nmcBd2XWdBr2AQb2PnxYY7/AGdkgIrLHJ59dNPEyt0u90GLl2GdgGcFjRYLHMYD0yZTG8gUNDd2b6UUGZ+GlZiDKxpc1+UuFtFENc01ZvXyn5FBJ4vBslaGyMa8AhwDhYDhsfcKJrE+WmPLfHO6TqfDzj+HxTtyTRskbd09ocL7i9iotWLRqYTizZMNu7HaYn5TpkwuGZE0RxsaxjdmtADR7AKYiIjUK5MlslptedzPrLzg8GyJpbGxrGkkkNFCzufcpFYjwnJlvknd53LSm5dwr5DM7DxOkJDi8tGbMNjfdVnFSZ3ptXruorTsrkmI9t8Nk8LhqRvhMqY3KK0eSK83dT2V548s/wBoy7rPdP3fHy+j7Dw2JjxI2Noe1gjDgNRGDYYD+n0SKxE70i2fJas1m06md6+fv9WB3AsMY/AMEZjBzBhaC0OO5A6HU7dyo+zrrWuGkdZni/2kZJ7vG986bmFwzI2iONjWMbs1oAaPYBWiIiNQxvktktNrzuZ9ZZVKggICAgICAgIPhCD54Y7BAyDsEAxjsEHkwN/SPoEHk4Rn6G/QIPBwEf8Au2/QIPn+HRf7tn0CD0MFH+hv0QehhWfpH0QevAb2CDycM3sg+DCM7IPYhAQew1B9QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBB/9k=" 
        alt="" className="publicidad-home"/>
      </div>

      <FooterC/> 
      
    </>
  )
}

export default HomePage