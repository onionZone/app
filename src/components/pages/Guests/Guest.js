import React from "react";

export default function Guest(props) {
  const { id, forname, lastname, phone, adult, overnight, invited, confirmed } =
    props.guest;

  const handleChange = (e) => {
    let guest = props.guest;
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    switch (name) {
      case "forname":
        guest.forname = value;
        break;
      case "lastname":
        guest.lastname = value;
        break;
      case "phone":
        guest.phone = value;
        break;
      case "adult":
        guest.adult = checked;
        break;
      case "overnight":
        guest.overnight = checked;
        break;
      case "invited":
        guest.invited = checked;
        break;
      case "confirmed":
        guest.confirmed = checked;
        break;
    }

    props.change(guest);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>
        <input
          name="forname"
          type="text"
          value={forname}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="lastname"
          type="text"
          value={lastname}
          onChange={handleChange}
        />
      </td>
      <td>
        <input name="phone" type="text" value={phone} onChange={handleChange} />
      </td>
      <td>
        <input
          name="adult"
          type="checkbox"
          checked={adult}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="overnight"
          type="checkbox"
          checked={overnight}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="invited"
          type="checkbox"
          checked={invited}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="confirmed"
          type="checkbox"
          checked={confirmed}
          onChange={handleChange}
        />
      </td>
      <td>
        <button className="remove" onClick={() => props.delete(id)}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}
