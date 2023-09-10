import React from 'react';
import './App.css';

function Timetable() {
  return (
    <div className="timetable-container">
      <h2 className="timetable-title">Timetable</h2>
      <div className="table-container">
        <table className="timetable">
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00 AM</td>
              <td><input type="text" defaultValue="Class 1" /></td>
              <td><input type="text" defaultValue="Class 2" /></td>
              <td><input type="text" defaultValue="Class 3" /></td>
              <td><input type="text" defaultValue="Class 4" /></td>
              <td><input type="text" defaultValue="Class 5" /></td>
            </tr>
            <tr>
              <td>10:00 AM</td>
              <td><input type="text" defaultValue="Class 6" /></td>
              <td><input type="text" defaultValue="Class 7" /></td>
              <td><input type="text" defaultValue="Class 8" /></td>
              <td><input type="text" defaultValue="Class 9" /></td>
              <td><input type="text" defaultValue="Class 10" /></td>
            </tr>
            <tr>
              <td>11:00 AM</td>
              <td><input type="text" defaultValue="Class 11" /></td>
              <td><input type="text" defaultValue="Class 12" /></td>
              <td><input type="text" defaultValue="Class 13" /></td>
              <td><input type="text" defaultValue="Class 14" /></td>
              <td><input type="text" defaultValue="Class 15" /></td>
            </tr>
            <tr>
              <td>12:00 AM</td>
              <td><input type="text" defaultValue="Class 16" /></td>
              <td><input type="text" defaultValue="Class 17" /></td>
              <td><input type="text" defaultValue="Class 18" /></td>
              <td><input type="text" defaultValue="Class 19" /></td>
              <td><input type="text" defaultValue="Class 20" /></td>
            </tr>
            <tr>
              <td>1:00 PM</td>
              <td><input type="text" defaultValue="Class 21" /></td>
              <td><input type="text" defaultValue="Class 22" /></td>
              <td><input type="text" defaultValue="Class 23" /></td>
              <td><input type="text" defaultValue="Class 24" /></td>
              <td><input type="text" defaultValue="Class 25" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Timetable;
