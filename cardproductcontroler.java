@RestController
@RequestMapping("/api/cardproduct")
public class CardProductController {

    private final String API_URL = "https://sandbox-api.marqeta.com/v3/cardproducts";
    private final String APP_TOKEN = "8b600579-36ee-4227-bd24-34d05382f478";
    private final String ADMIN_TOKEN = "639bd7e1-3168-4f29-b0c4-055cb14cb613";

    @PostMapping
    public ResponseEntity<?> createCardProduct() {
        try {
            RestTemplate restTemplate = new RestTemplate();

            String auth = APP_TOKEN + ":" + ADMIN_TOKEN;
            String encodedAuth = Base64.getEncoder().encodeToString(auth.getBytes());
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("Authorization", "Basic " + encodedAuth);

            Map<String, Object> body = new HashMap<>();
            body.put("name", "WorldVisaVirtualCard");
            body.put("start_date", LocalDate.now().toString());

            Map<String, Object> config = new HashMap<>();
            Map<String, Object> fulfillment = Map.of("payment_instrument", "VIRTUAL_PAN");
            Map<String, Object> poi = Map.of("ecommerce", true, "atm", false, "point_of_sale", false);
            Map<String, Object> lifeCycle = Map.of("activate_upon_issue", true);
            Map<String, Object> authControls = Map.of("allow_foreign_transactions", true,
                    "spending_limits", List.of(Map.of("amount", 1000, "interval", "MONTHLY")));

            config.put("fulfillment", fulfillment);
            config.put("poi", poi);
            config.put("card_life_cycle", lifeCycle);
            config.put("authorization_controls", authControls);
            body.put("config", config);
            body.put("active", true);

            HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);
            ResponseEntity<String> response = restTemplate.postForEntity(API_URL, request, String.class);
            return ResponseEntity.ok(response.getBody());

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
              }
