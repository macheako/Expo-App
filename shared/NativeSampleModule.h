#pragma once

#include <AppSpecsJSI.h>

#include <memory>
#include <string>

#include "LakiBeamUDP.h"

namespace facebook::react {

class NativeSampleModule : public NativeSampleModuleCxxSpec<NativeSampleModule> {
public:
  NativeSampleModule(std::shared_ptr<CallInvoker> jsInvoker);

  std::string reverseString(jsi::Runtime& rt, std::string input);

  bool startScanner(
    jsi::Runtime& rt, 
    std::string device_ip, 
    int32_t device_port,
    std::string host_ip,
    int32_t host_port
  );

  int32_t scan(jsi::Runtime& rt);

private:
  static LakiBeamUDP * _scanner;
};

} // namespace facebook::react
