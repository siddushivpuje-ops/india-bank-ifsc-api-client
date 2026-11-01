// .NET 10 console app. Set RAPIDAPI_KEY in your environment before running.
var key = Environment.GetEnvironmentVariable("RAPIDAPI_KEY") ?? "YOUR_RAPIDAPI_KEY";
const string host = "YOUR-RAPIDAPI-HOST.p.rapidapi.com"; // from your RapidAPI dashboard

using var http = new HttpClient { BaseAddress = new Uri($"https://{host}") };
http.DefaultRequestHeaders.Add("x-rapidapi-key", key);
http.DefaultRequestHeaders.Add("x-rapidapi-host", host);

using var response = await http.GetAsync("/api/v1/ifsc/SBIN0005943");
var body = await response.Content.ReadAsStringAsync();
Console.WriteLine($"{(int)response.StatusCode}: {body}");
