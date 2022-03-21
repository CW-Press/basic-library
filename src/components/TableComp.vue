<template>
  <div class="tableComp">
    <div class="tableDesktop">
      <table>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
        <tr>
          <td>Row 1</td>
          <td>Row 2</td>
          <td>Row 3</td>
        </tr>
        <tr>
          <td>Row 1</td>
          <td>Row 2</td>
          <td>Row 3</td>
        </tr>
        <tr>
          <td>Row 1</td>
          <td>Row 2</td>
          <td>Row 3</td>
        </tr>
        <tr>
          <td>Row 1</td>
          <td>Row 2</td>
          <td>Row 3</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tableComp {
  .tableDesktop {
    table {
      border: 1px solid white;
    }
    th {
      background-color: var(--table);
      color: var(--text-alt);
      text-align: left;
      margin-left: 7px;
      border: 1px solid black;
      font-size: 15px;
      font-weight: 400;
    }
    td {
      font-size: 15px;
      font-weight: 400;
      margin-left: 7px;
      border: 1px solid black;
    }
    th:nth-child(even) {
      width: 300px;
    }
    th:nth-child(odd) {
      width: 150px;
    }
  }
}
</style>
