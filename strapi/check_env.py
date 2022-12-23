import os
import re

ENV_REGEX = re.compile(r"(\w+)=(.*)\s*")

example_envs = {}
for line in open("./.env.example"):
    match = ENV_REGEX.fullmatch(line)
    example_envs[match.group(1)] = match.group(2)

envs = {}
if os.path.exists("./.env"):
    for line in open("./.env"):
        match = ENV_REGEX.fullmatch(line)
        envs[match.group(1)] = match.group(2)

for ee in example_envs.keys():
    if not ee in envs:
        print(f"Missing {ee}, adding it with default value \"{example_envs[ee]}\"")
        envs[ee] = example_envs[ee]

dotenv = open('.env', 'w+')
for env in envs.keys():
    dotenv.write(f"{env}={envs[env]}\n")
dotenv.flush()
dotenv.close()
