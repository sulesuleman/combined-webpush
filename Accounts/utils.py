import string
import random
import base64
import ecdsa
import uuid
import os


def get_website_logo_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join('uploads/logos', filename)


def generate_website_key():
    return 'WK-' + ''.join(random.sample(
        string.ascii_uppercase + '1234567890', 17))


def generate_website_rest_api_key():
    return 'WK-APIKEY-' + ''.join(random.sample(
        string.ascii_uppercase + '1234567890-/!@#$%*()][{}', 35))


def generate_website_sdk_auth_key():
    return 'WK-SDK-' + ''.join(random.sample(
        string.ascii_uppercase + '1234567890', 14))


def generate_vapid_keypair():
    """
    Generate a new set of encoded key-pair for VAPID
    Copied from https://gist.github.com/cjies/cc014d55976db80f610cd94ccb2ab21e
    """
    pk = ecdsa.SigningKey.generate(curve=ecdsa.NIST256p)
    vk = pk.get_verifying_key()
    return {
        'private_key': base64.urlsafe_b64encode(pk.to_string()).decode('utf-8').strip("="),
        'public_key': base64.urlsafe_b64encode(b"\x04" + vk.to_string()).decode('utf-8').strip("=")
    }
