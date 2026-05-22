from slint_testing_e2e_trunk import greet


def main() -> None:
    actual = greet()
    expected = "trunk says leaf"
    if actual != expected:
        raise SystemExit(f"smoke failed: got {actual!r}, expected {expected!r}")
    print("smoke OK")


if __name__ == "__main__":
    main()
