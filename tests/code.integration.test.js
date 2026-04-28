/**
 * @jest-environment jsdom
 */

const { searchColor } = require("../public/js/code.js");

describe("searchColor integration", () => {
  test("sends the expected API payload and renders the returned colors", () => {
    document.body.innerHTML = `
      <input id="searchText" value="re" />
      <span id="colorSearchResult"></span>
      <p id="colorList"></p>
    `;

    let lastRequest = null;

    class MockXMLHttpRequest {
      open(method, url, async) {
        this.method = method;
        this.url = url;
        this.async = async;
      }

      setRequestHeader(name, value) {
        this.headers = this.headers || {};
        this.headers[name] = value;
      }

      send(payload) {
        this.payload = payload;
        lastRequest = this;
        this.readyState = 4;
        this.status = 200;
        this.responseText = '{"results":["Red","Green"],"error":""}';
        this.onreadystatechange();
      }
    }

    global.XMLHttpRequest = MockXMLHttpRequest;

    searchColor();

    expect(lastRequest.method).toBe("POST");
    expect(lastRequest.url).toBe("http://COP4331-5.com/LAMPAPI/SearchColors.php");
    expect(lastRequest.headers["Content-type"]).toBe("application/json; charset=UTF-8");
    expect(JSON.parse(lastRequest.payload)).toEqual({ search: "re", userId: 0 });
    expect(document.getElementById("colorSearchResult").innerHTML).toBe(
      "Color(s) has been retrieved"
    );
    expect(document.getElementById("colorList").innerHTML.replace(/\s+/g, "")).toBe(
      "Red<br>Green"
    );
  });
});
